<!-- (kommiBo) Operator-assisted, source-derived engineering note; synthetic examples only. -->
# Rehearse slide navigation at both boundaries

Source: [`js/app.js`](https://github.com/edlopezpm-ops/sf-demo-emulator/blob/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b/js/app.js), [`data/content.js`](https://github.com/edlopezpm-ops/sf-demo-emulator/blob/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b/data/content.js). Review baseline: `2ddb01b8c8fa0ab557c7a92c6b544415ed84060b`.

## Reproduction

Use a fresh local page unless a step explicitly preserves state. These are manual instructions; their presence does not mean the browser procedure has been executed.

1. Reload the page so the presentation starts at slide 1.
2. Click Previous once; compare the title with the fourth entry in `content.slides`.
3. Click Next once; compare with the first entry.
4. Click Next four times and count the active dot after each click.

## Expected from source

The Previous handler uses `(currentSlide - 1 + length) % length`; Next uses `(currentSlide + 1) % length`. With four slides, Previous from 1 reaches 4 and Next from 4 reaches 1. A complete four-step cycle returns to the same slide.

## Evidence boundary

The implementation assumes at least one slide. Do not use an empty array as a supported configuration: `renderSlide()` reads fields from the selected item without a fallback.
