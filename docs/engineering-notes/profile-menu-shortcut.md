<!-- (kommiBo) Operator-assisted, source-derived engineering note; synthetic examples only. -->
# Check profile expansion and the resume shortcut

Source: [`js/app.js`](https://github.com/edlopezpm-ops/sf-demo-emulator/blob/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b/js/app.js), [`index.html`](https://github.com/edlopezpm-ops/sf-demo-emulator/blob/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b/index.html). Review baseline: `2ddb01b8c8fa0ab557c7a92c6b544415ed84060b`.

## Reproduction

Use a fresh local page unless a step explicitly preserves state. These are manual instructions; their presence does not mean the browser procedure has been executed.

1. Reload and inspect `#profilePanel.hidden` and `#profileTrigger[aria-expanded]`.
2. Open the profile menu and activate About / Resume.
3. Verify that Resume is active and the profile panel closes.
4. Reopen the panel, then click the profile trigger again.

## Expected from source

`toggleProfileMenu()` flips the `hidden` property and synchronizes `aria-expanded`. The shortcut calls `showView("resume")` followed by the same toggle, so a normally opened panel closes after navigation.

## Evidence boundary

There is no document-wide outside-click or Escape listener, and no explicit focus transfer in these handlers. Do not promise those behaviors. Record keyboard observations separately.
