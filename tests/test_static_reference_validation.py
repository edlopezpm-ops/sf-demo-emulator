from __future__ import annotations

import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

import test_static_contract as contract


# (kommiBo) Exercise the real validator against synthetic HTML and CSS origins.
class StaticReferenceValidationTests(unittest.TestCase):
    def setUp(self) -> None:
        temporary_directory = tempfile.TemporaryDirectory()
        self.addCleanup(temporary_directory.cleanup)
        self.root = Path(temporary_directory.name)
        (self.root / "assets").mkdir()
        (self.root / "assets/mark.svg").write_text("<svg/>", encoding="utf-8")
        (self.root / "css").mkdir()

    def validate(self, html: str = "", css: str = "") -> None:
        index = self.root / "index.html"
        index.write_text(html, encoding="utf-8")
        (self.root / "css/styles.css").write_text(css, encoding="utf-8")
        validator = contract.StaticContractTests("test_local_references_exist")
        validator.parser = contract._IndexContractParser()
        validator.parser.feed(index.read_text(encoding="utf-8"))
        with patch.object(contract, "ROOT", self.root), patch.object(contract, "INDEX", index):
            validator.test_local_references_exist()

    def test_css_parent_relative_asset_exists(self) -> None:
        self.validate(css="body { background: url('../assets/mark.svg'); }")

    def test_css_relative_asset_cannot_borrow_html_base(self) -> None:
        with self.assertRaises(AssertionError):
            self.validate(css="body { background: url('assets/mark.svg'); }")

    def test_css_sibling_asset_exists(self) -> None:
        (self.root / "css/near.svg").write_text("<svg/>", encoding="utf-8")
        self.validate(css="body { background: url('near.svg'); }")

    def test_root_relative_assets_exist_in_html_and_css(self) -> None:
        self.validate(
            html='<img src="/assets/mark.svg">',
            css="body { background: url('/assets/mark.svg'); }",
        )

    def test_html_asset_remains_relative_to_document(self) -> None:
        self.validate(html='<img src="assets/mark.svg">')
        with self.assertRaises(AssertionError):
            self.validate(html='<img src="missing.svg">')

    def test_query_and_fragment_do_not_change_asset_path(self) -> None:
        self.validate(css="body { background: url('../assets/mark.svg?v=1#mark'); }")

    def test_external_and_pathless_references_remain_skipped(self) -> None:
        for reference in (
            "https://example.invalid/mark.svg",
            "//example.invalid/mark.svg",
            "data:image/svg+xml;base64,PHN2Zy8+",
            "#mark",
            "?v=1",
        ):
            with self.subTest(reference=reference):
                self.validate(
                    html=f'<img src="{reference}">',
                    css=f"body {{ background: url('{reference}'); }}",
                )


if __name__ == "__main__":
    unittest.main()
