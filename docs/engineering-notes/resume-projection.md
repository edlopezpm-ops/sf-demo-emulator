<!-- (kommiBo) Operator-assisted, source-derived engineering note; synthetic examples only. -->
# Locate resume fields and repeated strength cards

Source: [`data/content.js`](https://github.com/edlopezpm-ops/sf-demo-emulator/blob/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b/data/content.js), [`js/app.js`](https://github.com/edlopezpm-ops/sf-demo-emulator/blob/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b/js/app.js), [`index.html`](https://github.com/edlopezpm-ops/sf-demo-emulator/blob/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b/index.html). Review baseline: `2ddb01b8c8fa0ab557c7a92c6b544415ed84060b`.

## Reproduction

Use a fresh local page unless a step explicitly preserves state. These are manual instructions; their presence does not mean the browser procedure has been executed.

1. Open Resume and compare the headline, body and positioning with `content.resume`.
2. Count the strength cards; the baseline defines five strings.
3. Inspect a strength card's DOM: it should be a `.strength` div containing text.
4. For a content-edit rehearsal in a disposable checkout, use the synthetic strength `Translate a test requirement into a validation step`, reload, and then restore the edit.

## Expected from source

`renderResume()` assigns the three text fields and replaces the strength grid with one generated div per string. The source array controls order and count. Text is inserted with `textContent`.

## Evidence boundary

This renders supplied claims; it does not verify employment history or skill proficiency. Any edit to personal claims still requires factual source review. The synthetic rehearsal is an example, not an edit already performed.
