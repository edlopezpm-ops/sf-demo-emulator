# Contributing to the interview demo

<!-- (kommiBo) Repository-specific contribution and validation guidance. -->

## Establish scope and permission

This is a static interview demonstration. The [project license](LICENSE) requires Ed
Lopez's prior written permission for reuse of his proprietary material unless an
existing separate license or permission applies. Third-party rights and prior grants
are preserved; this guide creates no contributor agreement. Discuss a proposed
change with [aekr@aekr.io](mailto:aekr@aekr.io), and submit only material you are authorized
to provide. The [licensing inventory](docs/licensing.md) separates application, image
and brand permissions.

For a bug report, include the commit, browser/version, viewport, affected tab or control,
reproduction steps, expected result and observed result. Use synthetic discovery/chat
text and redact personal interview material from screenshots. Report security-sensitive
issues through [SECURITY.md](SECURITY.md).

## Check source contracts and visible behavior

With Python 3.12+ and Node.js 20+, run from the repository root:

```shell
python3 -m unittest discover -s tests -p 'test_*.py'
```

The suite checks local HTML/CSS asset paths, DOM references, script order, JavaScript
syntax and the legacy profile-image format, including synthetic path-resolution cases.
It does not prove browser layout, keyboard behavior or every interaction. For a UI
change, also serve the app locally:

```shell
python3 -m http.server 4173 --bind 127.0.0.1
```

Open `http://localhost:4173`, reproduce the affected flow and record browser, viewport,
keyboard checks and console errors. Preserve the existing load order and identifiers
unless an explicitly scoped change updates their consumers and tests together. See
the [editing guide](docs/editing-guide.md) for content locations.

## Make review and recovery practical

Explain the before/after behavior and include test results and sanitized visual evidence
where relevant. Keep personal assets and unrelated copy out of the diff. A new backend,
authentication flow or data persistence is a separate design change, not a content edit.
Use the existing PR, validation and separate-review process; recover merged changes
with a reviewed revert PR. A documentation-only change should verify its links and
source claims without claiming a browser acceptance test that did not happen.
