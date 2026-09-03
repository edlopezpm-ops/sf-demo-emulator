# Salesforce SE Interview Demo

Static HTML5 showcase originally prepared for Ed Lopez's Salesforce Solution Engineer interview.

## Status

This repository is a browser-only demonstration with no backend, authentication, data persistence, or production deployment. Its content is personal-facing and intentionally remains unchanged by the professionalization baseline.

## Open It

Open `index.html` directly in a browser.

Optional local server:

```bash
python -m http.server 4173
```

Then open `http://localhost:4173`.

## What It Includes

- Salesforce-inspired interface without cloning exact Salesforce screens.
- Modern and Classic-inspired theme switcher.
- Editable 4-slide presentation.
- Resume / positioning tab.
- Discovery canvas and live demo controls.
- Visual support chat with canned responses.
- Codex/OpenAI footer and original Codex mascot asset.

## Edit Content

Most interview copy lives in `data/content.js`.

See `docs/editing-guide.md` for the fastest edit path.

## Important Asset Notes

- `assets/codex-mascot.png` is an original AI-generated mascot for this project.
- `assets/salesforce-reference.svg` is a local interview reference mark, not an official Salesforce asset.
- `assets/profile.jpg` is copied from your `me2.jpg` profile photo.
- `assets/profile.jpg` is a legacy filename containing PNG image data. The path is retained to avoid changing the existing content contract.

## Validate

Requirements: Python 3.12+ and Node.js 20+.

```bash
python -m unittest discover -s tests -p 'test_*.py'
```

The validation checks local asset references, the DOM IDs used by the JavaScript, script load order, JavaScript syntax, and the documented legacy profile-image format.

## License

The source is publicly visible, but the existing `LICENSE` reserves all rights and does not grant permission to copy, modify, distribute, publish, or reuse the project. No licensing terms were changed during professionalization.

## Governance

Changes follow the AEKR engineering workflow: bounded scope, deterministic validation, pull-request review, and recoverable changes. The PR author and reviewer are distinct technical actors under one HOC authority; the reviewer approves and merges the exact validated head. This separation is an operational control, not an independent audit.

---

Built with the **[AI Engineering Knowledge Racking (AEKR)](https://aekr.io)** workflow.
