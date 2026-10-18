<!-- (kommiBo) Operator-assisted, source-derived engineering note; synthetic examples only. -->
# Run a bounded keyboard and accessible-name review

Source: [`index.html`](https://github.com/edlopezpm-ops/sf-demo-emulator/blob/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b/index.html), [`js/app.js`](https://github.com/edlopezpm-ops/sf-demo-emulator/blob/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b/js/app.js), [`css/styles.css`](https://github.com/edlopezpm-ops/sf-demo-emulator/blob/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b/css/styles.css). Review baseline: `2ddb01b8c8fa0ab557c7a92c6b544415ed84060b`.

## Reproduction

Use a fresh local page unless a step explicitly preserves state. These are manual instructions; their presence does not mean the browser procedure has been executed.

1. Start from a fresh page and navigate using Tab and Shift+Tab; activate ordinary buttons with Enter or Space.
2. Open profile, change theme, follow the resume shortcut, then use slide dots and Speaker notes.
3. Open chat and inspect accessible names for its input, stage selector and messages region in the browser accessibility tree.
4. Record focus visibility, focus order and any unnamed control as an observation, with browser and date.

## Expected from source

Native buttons, labeled discovery fields, dot `aria-label`s, the profile's `aria-expanded`, Close chat's label and the native details/summary control are explicit source features. The chat input has a placeholder but no explicit label; the stage select has no associated label; chat messages have no live-region attribute.

## Evidence boundary

This is a manual review recipe, not a WCAG pass. No Escape handling, focus trapping, ARIA tab keyboard model or automated accessibility suite is claimed. A discovered issue should identify the exact control and reproduction steps.
