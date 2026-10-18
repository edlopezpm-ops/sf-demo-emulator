<!-- (kommiBo) Operator-assisted, source-derived engineering note; synthetic examples only. -->
# Explain the stage meter as position rather than workflow progress

Source: [`js/app.js`](https://github.com/edlopezpm-ops/sf-demo-emulator/blob/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b/js/app.js), [`index.html`](https://github.com/edlopezpm-ops/sf-demo-emulator/blob/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b/index.html), [`css/styles.css`](https://github.com/edlopezpm-ops/sf-demo-emulator/blob/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b/css/styles.css). Review baseline: `2ddb01b8c8fa0ab557c7a92c6b544415ed84060b`.

## Reproduction

Use a fresh local page unless a step explicitly preserves state. These are manual instructions; their presence does not mean the browser procedure has been executed.

1. Open Discovery and select each of the four stage options in order.
2. Inspect `#stageMeter.style.width` after each change.
3. Compare the selected label with the meter.
4. Click Mark Stage Complete and inspect whether the selection changes.

## Expected from source

`updateStageMeter()` calculates `(selectedIndex + 1) / options.length * 100`, producing 25%, 50%, 75% and 100% for the four baseline options. The header's Mark Stage Complete button has no bound handler in `wireEvents()`.

## Evidence boundary

The meter is a local selection visualization. It does not persist, validate completion, update a Salesforce opportunity or expose progressbar ARIA semantics.
