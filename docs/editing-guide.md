# Editing Guide

## Fastest Content Edits

Edit `data/content.js`.

- `slides`: title, kicker, bullets, proof points, and speaker notes.
- `resume`: the summarized CV tab.
- `questions`: questions to ask Puja.
- `chatResponses`: canned chat replies.
- `profile`: name, title, short bio, and profile image path.

Refresh `index.html` after saving.

## Profile Photo

The project currently uses:

`assets/profile.jpg`

<!-- (kommiBo) Preserve the existing image format contract and publication permissions. -->
Despite its legacy `.jpg` filename, the committed file contains PNG bytes and the static
contract test requires that signature. To preserve the current contract, replace it with
an authorized PNG using the same path. Switching to actual JPEG bytes requires a separately
reviewed contract/test change; changing the extension alone is not a conversion.

Review the photo and personal content before publishing or screen sharing. The demo's
proprietary license does not provide permission to reuse another person's image. See the
[use boundaries](../TERMS.md) and [data-handling guide](data-handling.md).

If changing an asset path as part of an authorized update, this is the reference in `data/content.js`:

```js
avatar: "assets/profile.jpg"
```

## Presentation Flow

Recommended interview sequence:

1. Open with slide 1: positioning and why this format exists.
2. Use slide 2 to show discovery and requirements gathering.
3. Use slide 3 to show how you translate ambiguity into a credible solution.
4. Use slide 4 to close with leadership, trust, and next-step questions.
5. Briefly switch to Classic mode to show adaptability and product fluency.
6. Use Demo Controls to show live configuration thinking.
7. End in the Resume tab with the concise positioning statement.

## Local Run

<!-- (kommiBo) Keep this unauthenticated demonstration on loopback. -->
Open `index.html` directly in a browser, or use the loopback-bound server below.
It is not authenticated hosting; serve only a working copy cleared for demonstration:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Then open:

`http://localhost:4173`
