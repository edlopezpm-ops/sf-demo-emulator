<!-- (kommiBo) Operator-assisted, source-derived engineering note; synthetic examples only. -->
# Verify direct slide selection and dot labels

Source: [`js/app.js`](https://github.com/edlopezpm-ops/sf-demo-emulator/blob/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b/js/app.js), [`data/content.js`](https://github.com/edlopezpm-ops/sf-demo-emulator/blob/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b/data/content.js), [`css/styles.css`](https://github.com/edlopezpm-ops/sf-demo-emulator/blob/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b/css/styles.css). Review baseline: `2ddb01b8c8fa0ab557c7a92c6b544415ed84060b`.

## Reproduction

Use a fresh local page unless a step explicitly preserves state. These are manual instructions; their presence does not mean the browser procedure has been executed.

1. Reload the page and count buttons inside `#slideDots`.
2. Activate the third dot, then the first dot.
3. Inspect each button's accessible label and the `.active` class.
4. Compare the visible title, bullets and proof with the chosen slide object.

## Expected from source

`renderDots()` creates one `type="button"` per slide, labeled `Go to slide 1` through `Go to slide 4`. Clicking a dot sets the exact index and renders the slide. `renderSlide()` gives only the matching dot the `active` class.

## Evidence boundary

An active CSS class is visual state; the code does not set `aria-current` or `aria-pressed` on dots. Record assistive-technology feedback separately instead of treating label existence as accessibility acceptance.
