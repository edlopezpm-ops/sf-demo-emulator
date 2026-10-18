<!-- (kommiBo) Operator-assisted, source-derived engineering note; synthetic examples only. -->
# Review the two responsive layout breakpoints

Source: [`css/styles.css`](https://github.com/edlopezpm-ops/sf-demo-emulator/blob/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b/css/styles.css), [`index.html`](https://github.com/edlopezpm-ops/sf-demo-emulator/blob/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b/index.html). Review baseline: `2ddb01b8c8fa0ab557c7a92c6b544415ed84060b`.

## Reproduction

Use a fresh local page unless a step explicitly preserves state. These are manual instructions; their presence does not mean the browser procedure has been executed.

1. Inspect the page at 1200, 1080, 800 and 640 CSS-pixel viewport widths.
2. At 1080 and below, check the utility rail, insight panel, slide and discovery columns.
3. At 640 and below, inspect strength-card columns, record-header stacking and chat-panel width.
4. Repeat with the chat open and a long synthetic prompt to inspect overflow.

## Expected from source

The max-width 1080px rules hide the rail and insights and collapse workspace, slide and discovery grids. The max-width 640px rules stack the record header and strengths, reduce text sizing, and set chat width to `calc(100vw - 28px)`.

## Evidence boundary

These are CSS expectations, not physical-device or screenshot evidence. Browser zoom, scrollbars, long content and font metrics can change the observed result. Record viewport, browser and actual defects during manual review.
