<!-- (kommiBo) Operator-assisted, source-derived engineering note; synthetic examples only. -->
# Trace startup from content to rendered views

Source: [`index.html`](https://github.com/edlopezpm-ops/sf-demo-emulator/blob/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b/index.html), [`data/content.js`](https://github.com/edlopezpm-ops/sf-demo-emulator/blob/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b/data/content.js), [`js/app.js`](https://github.com/edlopezpm-ops/sf-demo-emulator/blob/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b/js/app.js). Review baseline: `2ddb01b8c8fa0ab557c7a92c6b544415ed84060b`.

## Reproduction

Use a fresh local page unless a step explicitly preserves state. These are manual instructions; their presence does not mean the browser procedure has been executed.

1. Serve the repository with `python -m http.server 4173` and open `http://localhost:4173`.
2. Inspect the final two script tags in `index.html`: `data/content.js` precedes `js/app.js`.
3. In browser developer tools, inspect `window.DEMO_CONTENT.slides.length`; the baseline contains `4`.
4. Compare the first slide title and profile image path with `data/content.js`.

## Expected from source

`content` reads `window.DEMO_CONTENT` once. `init()` renders the profile, dots, slide, resume, discovery fields and questions before wiring events; it also initializes the meter and greeting. The first slide is index zero.

## Evidence boundary

This is a browser-only content projection. No backend, authentication or persistence is established. A script-order failure can prevent initialization; passing syntax checks alone does not prove startup in a browser.
