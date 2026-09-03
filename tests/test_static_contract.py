from __future__ import annotations

import re
import shutil
import subprocess
import unittest
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit


ROOT = Path(__file__).resolve().parents[1]
INDEX = ROOT / "index.html"


class _IndexContractParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.ids: set[str] = set()
        self.references: list[str] = []
        self.scripts: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attributes = dict(attrs)
        if element_id := attributes.get("id"):
            self.ids.add(element_id)

        if tag in {"img", "script", "source"} and (source := attributes.get("src")):
            self.references.append(source)
            if tag == "script":
                self.scripts.append(source)
        if tag == "link" and (href := attributes.get("href")):
            self.references.append(href)


class StaticContractTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        cls.index_text = INDEX.read_text(encoding="utf-8")
        cls.parser = _IndexContractParser()
        cls.parser.feed(cls.index_text)

    def test_local_references_exist(self) -> None:
        css_text = (ROOT / "css/styles.css").read_text(encoding="utf-8")
        references = self.parser.references + re.findall(r"url\(['\"]?([^)'\"]+)", css_text)

        missing: list[str] = []
        for reference in references:
            parsed = urlsplit(reference)
            if parsed.scheme or parsed.netloc or not parsed.path:
                continue
            if not (ROOT / parsed.path.lstrip("/")).is_file():
                missing.append(reference)

        self.assertEqual([], missing)

    def test_content_loads_before_application(self) -> None:
        self.assertEqual(["data/content.js", "js/app.js"], self.parser.scripts)

    def test_javascript_dom_ids_exist(self) -> None:
        app_text = (ROOT / "js/app.js").read_text(encoding="utf-8")
        referenced_ids = set(re.findall(r'querySelector\(["\']#([A-Za-z][\w-]*)["\']\)', app_text))
        self.assertEqual(set(), referenced_ids - self.parser.ids)

    def test_javascript_syntax(self) -> None:
        node = shutil.which("node")
        self.assertIsNotNone(node, "Node.js is required for JavaScript syntax validation")
        for relative_path in ("data/content.js", "js/app.js"):
            completed = subprocess.run(
                [node, "--check", relative_path],
                cwd=ROOT,
                check=False,
                capture_output=True,
                text=True,
            )
            self.assertEqual(0, completed.returncode, completed.stderr)

    def test_legacy_profile_asset_contract_is_explicit(self) -> None:
        profile = ROOT / "assets/profile.jpg"
        self.assertEqual(b"\x89PNG\r\n\x1a\n", profile.read_bytes()[:8])
        self.assertIn('avatar: "assets/profile.jpg"', (ROOT / "data/content.js").read_text(encoding="utf-8"))


if __name__ == "__main__":
    unittest.main()
