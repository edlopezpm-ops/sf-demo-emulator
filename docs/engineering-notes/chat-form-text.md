<!-- (kommiBo) Operator-assisted, source-derived engineering note; synthetic examples only. -->
# Check whitespace handling and literal user text in chat

Source: [`js/app.js`](https://github.com/edlopezpm-ops/sf-demo-emulator/blob/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b/js/app.js), [`index.html`](https://github.com/edlopezpm-ops/sf-demo-emulator/blob/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b/index.html). Review baseline: `2ddb01b8c8fa0ab557c7a92c6b544415ed84060b`.

## Reproduction

Use a fresh local page unless a step explicitly preserves state. These are manual instructions; their presence does not mean the browser procedure has been executed.

1. Open Help and submit an input containing only spaces.
2. Submit the synthetic text `  <b>test handoff</b>  `.
3. Inspect the two appended messages and the emptied input.
4. Compare the reply with the constant string in the submit listener.

## Expected from source

Whitespace-only submission returns before appending. A nonempty submission is trimmed, inserted as a user message using `textContent`, cleared, then followed by the fixed interview guidance response. The angle brackets appear as text rather than a new `b` element.

## Evidence boundary

This narrow DOM-insertion behavior is not a full security review. There is no request, persistence, conversation model or input-length policy implemented in this handler.
