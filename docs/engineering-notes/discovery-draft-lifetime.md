<!-- (kommiBo) Operator-assisted, source-derived engineering note; synthetic examples only. -->
# Demonstrate the lifetime of discovery field edits

Source: [`js/app.js`](https://github.com/edlopezpm-ops/sf-demo-emulator/blob/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b/js/app.js), [`data/content.js`](https://github.com/edlopezpm-ops/sf-demo-emulator/blob/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b/data/content.js), [`index.html`](https://github.com/edlopezpm-ops/sf-demo-emulator/blob/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b/index.html). Review baseline: `2ddb01b8c8fa0ab557c7a92c6b544415ed84060b`.

## Reproduction

Use a fresh local page unless a step explicitly preserves state. These are manual instructions; their presence does not mean the browser procedure has been executed.

1. Open Discovery and replace Business pain with the synthetic value `Sandbox handoff needs a clearer owner`.
2. Visit Resume, return to Discovery, and inspect the field.
3. Reload the page and compare the value with `content.discovery.pain`.
4. Check the other two input IDs against `renderDiscovery()`.

## Expected from source

Initialization assigns `pain`, `metric` and `constraint` to their inputs. View changes only toggle classes, so a typed value remains in that live DOM. Reload reruns initialization from `data/content.js`.

## Evidence boundary

There is no Save handler or data persistence for these fields. Browser autofill/restoration behavior is separate from application storage; use a clean reload when recording the source-defined default.
