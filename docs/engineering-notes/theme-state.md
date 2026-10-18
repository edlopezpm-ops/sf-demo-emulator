<!-- (kommiBo) Operator-assisted, source-derived engineering note; synthetic examples only. -->
# Exercise both theme directions without losing content state

Source: [`js/app.js`](https://github.com/edlopezpm-ops/sf-demo-emulator/blob/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b/js/app.js), [`css/styles.css`](https://github.com/edlopezpm-ops/sf-demo-emulator/blob/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b/css/styles.css), [`index.html`](https://github.com/edlopezpm-ops/sf-demo-emulator/blob/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b/index.html). Review baseline: `2ddb01b8c8fa0ab557c7a92c6b544415ed84060b`.

## Reproduction

Use a fresh local page unless a step explicitly preserves state. These are manual instructions; their presence does not mean the browser procedure has been executed.

1. On slide 2, open the profile panel and select Switch to Classic.
2. Inspect `document.querySelector(".app-shell").dataset.theme` and the toggle's new label.
3. Select the toggle again and compare the slide title before and after.
4. Reload the page and inspect the initial theme.

## Expected from source

`setTheme()` alternates `modern` and `classic` and switches its label to the next available mode. CSS changes variables and selected component rules. The handler does not reset `currentSlide`; the HTML starts with `data-theme="modern"` on a fresh load.

## Evidence boundary

This is a local style mode, not a Salesforce connection or authenticated product mode. No storage API persists the selection across reloads.
