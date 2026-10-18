<!-- (kommiBo) Operator-assisted, source-derived engineering note; synthetic examples only. -->
# Trace presentation, resume, discovery and questions views

Source: [`js/app.js`](https://github.com/edlopezpm-ops/sf-demo-emulator/blob/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b/js/app.js), [`index.html`](https://github.com/edlopezpm-ops/sf-demo-emulator/blob/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b/index.html), [`css/styles.css`](https://github.com/edlopezpm-ops/sf-demo-emulator/blob/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b/css/styles.css). Review baseline: `2ddb01b8c8fa0ab557c7a92c6b544415ed84060b`.

## Reproduction

Use a fresh local page unless a step explicitly preserves state. These are manual instructions; their presence does not mean the browser procedure has been executed.

1. Activate Resume, Discovery, Questions and Presentation in that order.
2. Inspect `.view.active` and `.tab.active` after each click.
3. Navigate to slide 3, visit Resume, then return to Presentation.
4. Check the URL during these transitions.

## Expected from source

`showView()` toggles `active` across the four view elements and matches tabs by `data-view`. CSS displays `.view.active` only. The selected slide remains in memory; there is no router or URL update in this function.

## Evidence boundary

Native browser Back does not represent these view transitions. The buttons use ordinary button semantics, not a complete ARIA tab pattern; arrow-key tab behavior is not implemented.
