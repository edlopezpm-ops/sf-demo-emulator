<!-- (kommiBo) Operator-assisted, source-derived engineering note; synthetic examples only. -->
# Map feature toggles to all matching elements

Source: [`js/app.js`](https://github.com/edlopezpm-ops/sf-demo-emulator/blob/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b/js/app.js), [`index.html`](https://github.com/edlopezpm-ops/sf-demo-emulator/blob/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b/index.html), [`css/styles.css`](https://github.com/edlopezpm-ops/sf-demo-emulator/blob/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b/css/styles.css). Review baseline: `2ddb01b8c8fa0ab557c7a92c6b544415ed84060b`.

## Reproduction

Use a fresh local page unless a step explicitly preserves state. These are manual instructions; their presence does not mean the browser procedure has been executed.

1. In Discovery, clear Show Quick Demo button.
2. At desktop width, inspect both the Quick Demo action and Demo Hook insight card.
3. Clear Show Questions tab, then re-enable both checkboxes.
4. Inspect `[data-feature="quickDemo"]` and `[data-feature="questions"]` in the DOM.

## Expected from source

`toggleFeature()` selects every element with the matching feature attribute and toggles `hidden-feature`. CSS hides that class with `display: none !important`. Quick Demo has two targets; Questions has its navigation button as a target.

## Evidence boundary

Hiding a navigation button does not delete its view or clear state. The controls are visibility switches, not authorization or feature-entitlement checks. Quick Demo itself has no action handler in the baseline.
