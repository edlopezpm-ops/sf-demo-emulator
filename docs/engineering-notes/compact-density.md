<!-- (kommiBo) Operator-assisted, source-derived engineering note; synthetic examples only. -->
# Separate compact spacing from responsive layout

Source: [`js/app.js`](https://github.com/edlopezpm-ops/sf-demo-emulator/blob/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b/js/app.js), [`css/styles.css`](https://github.com/edlopezpm-ops/sf-demo-emulator/blob/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b/css/styles.css), [`index.html`](https://github.com/edlopezpm-ops/sf-demo-emulator/blob/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b/index.html). Review baseline: `2ddb01b8c8fa0ab557c7a92c6b544415ed84060b`.

## Reproduction

Use a fresh local page unless a step explicitly preserves state. These are manual instructions; their presence does not mean the browser procedure has been executed.

1. Open Discovery at a viewport wider than 1080 CSS pixels.
2. Enable Compact page density and inspect `.app-shell.classList`.
3. Compare record-header padding and slide-card minimum height with normal mode.
4. Disable the checkbox and compare again.

## Expected from source

The change listener toggles the shell's `compact` class. Compact rules use 14px panel padding, 390px slide minimum height and 28px slide-copy padding; normal source rules use 16px record-header padding, 480px slide minimum height and 44px slide-copy padding.

## Evidence boundary

Media queries and selector specificity also affect computed layout. At narrow widths, measure actual computed styles instead of assuming compact mode determines every dimension.
