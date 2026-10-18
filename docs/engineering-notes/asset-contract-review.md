<!-- (kommiBo) Operator-assisted, source-derived engineering note; synthetic examples only. -->
# Check local assets without rewriting the profile contract

Source: [`tests/test_static_contract.py`](https://github.com/edlopezpm-ops/sf-demo-emulator/blob/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b/tests/test_static_contract.py), [`data/content.js`](https://github.com/edlopezpm-ops/sf-demo-emulator/blob/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b/data/content.js), [`index.html`](https://github.com/edlopezpm-ops/sf-demo-emulator/blob/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b/index.html). Review baseline: `2ddb01b8c8fa0ab557c7a92c6b544415ed84060b`.

## Reproduction

Use a fresh local page unless a step explicitly preserves state. These are manual instructions; their presence does not mean the browser procedure has been executed.

1. Run `python -m unittest discover -s tests -p 'test_*.py'` from the root with Python 3.12+ and Node.js 20+ on PATH.
2. Inspect the profile asset's first eight bytes: the source test expects the PNG signature, despite its `.jpg` filename.
3. Compare `content.profile.avatar` with `assets/profile.jpg`.
4. Open the page to inspect actual image display and alt text separately.

## Expected from source

The baseline suite has five tests: local references, script order, literal DOM selector IDs, JavaScript syntax and the explicit legacy image contract. The profile check requires PNG bytes and the existing filename reference.

## Evidence boundary

The tests do not verify external services, visual layout or complete browser interactions. Renaming the image extension alone breaks the documented contract; any intentional asset change needs a coherent source/test change outside this documentation recipe.
