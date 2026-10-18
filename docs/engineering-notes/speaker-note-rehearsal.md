<!-- (kommiBo) Operator-assisted, source-derived engineering note; synthetic examples only. -->
# Keep visible slides and speaker notes aligned

Source: [`js/app.js`](https://github.com/edlopezpm-ops/sf-demo-emulator/blob/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b/js/app.js), [`data/content.js`](https://github.com/edlopezpm-ops/sf-demo-emulator/blob/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b/data/content.js), [`index.html`](https://github.com/edlopezpm-ops/sf-demo-emulator/blob/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b/index.html). Review baseline: `2ddb01b8c8fa0ab557c7a92c6b544415ed84060b`.

## Reproduction

Use a fresh local page unless a step explicitly preserves state. These are manual instructions; their presence does not mean the browser procedure has been executed.

1. Open the native Speaker notes disclosure on slide 1.
2. Navigate to slide 2 without closing it.
3. Compare `#speakerNotes` with the second slide's `notes` field.
4. Close and reopen the disclosure using its summary control.

## Expected from source

`renderSlide()` updates kicker, title, subtitle, proof, notes and bullets together. The native `details` element owns its open state; no slide handler resets it. The note text changes to the selected slide's content.

## Evidence boundary

Speaker notes are part of the delivered DOM, not private presenter data. Do not put confidential customer facts in the notes merely because the disclosure starts collapsed.
