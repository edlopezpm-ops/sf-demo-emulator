<!-- (kommiBo) Operator-assisted maintenance; source-reviewed documentation. -->
# Static demo validation: validation and diagnosis

Run from the repository root:

```shell
python3 -m unittest discover -s tests -p 'test_*.py'
```

Use Python 3.12+ and Node.js 20+. Node must be on `PATH` because [the static validator](../tests/test_static_contract.py) invokes `node --check` for both JavaScript files.

| Failure | Source to inspect |
| --- | --- |
| Missing local reference | Paths in `index.html` and `url(...)` references in `css/styles.css`; check filename case on Linux. |
| Script load order | `data/content.js` must appear before `js/app.js` in the HTML. |
| Missing DOM ID | Literal `querySelector('#...')` uses in `js/app.js` and matching HTML IDs. |
| JavaScript syntax | The named script and Node's parser output; this is syntax checking, not browser execution. |
| Profile-image contract | `assets/profile.jpg` intentionally contains PNG bytes and remains referenced by that legacy path. |

The DOM test checks the literal selectors matched by its regular expression. It does not establish that all dynamic selectors or interactive paths work. The asset test checks local existence; it does not validate external services, image rendering, accessibility, or visual layout.

After an interactive change, serve the repository locally with `python3 -m http.server 4173`, open it in a browser, and exercise the edited feature. Check the theme switch, slide controls, resume tab, discovery controls, and canned chat as applicable. Report these observations separately from the automated suite.

Use the [editing guide](editing-guide.md) for content locations. A profile replacement must be reviewed against the existing format assertion; changing the extension alone breaks the contract.

See [change and recovery guidance](change-recovery.md) before merging a correction.

## HOC review note — 2026-10-09

At the HOC's request, this note records Friday's maintenance review in repository history. The date uses America/New_York.

Automated baseline validation passed at [`35115926558e`](https://github.com/edlopezpm-ops/sf-demo-emulator/commit/35115926558e6012f9b28b8e324e6420a6b49ec1). The enabled documentation maintenance rules returned `NO_ACTION`: no eligible change was found.

The check covered static references, DOM contracts and JavaScript syntax; it did not exercise browser interactions.
