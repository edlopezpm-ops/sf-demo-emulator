<!-- (kommiBo) Operator-assisted, source-derived engineering note; synthetic examples only. -->
# Follow canned chat prompts from footer and widget

Source: [`js/app.js`](https://github.com/edlopezpm-ops/sf-demo-emulator/blob/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b/js/app.js), [`data/content.js`](https://github.com/edlopezpm-ops/sf-demo-emulator/blob/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b/data/content.js), [`index.html`](https://github.com/edlopezpm-ops/sf-demo-emulator/blob/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b/index.html). Review baseline: `2ddb01b8c8fa0ab557c7a92c6b544415ed84060b`.

## Reproduction

Use a fresh local page unless a step explicitly preserves state. These are manual instructions; their presence does not mean the browser procedure has been executed.

1. Reload, open Help and inspect the single initialization greeting.
2. Close chat, then activate the footer's Feasibility prompt.
3. Activate Discovery inside the widget twice.
4. Compare the appended messages with `content.chatResponses.feasibility` and `.discovery`.

## Expected from source

`openChatWith()` unhides the panel and appends a response only for a recognized seed. Help supplies no seed. Every matching `[data-chat-seed]` button uses the same listener; repeated activations append repeated canned messages.

## Evidence boundary

No AI service is called. Closing chat hides the panel without clearing history. A visible canned reply is not evidence of an LLM integration or customer-support backend.
