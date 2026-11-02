<!-- (kommiBo) Source-reviewed repository notice; no runtime or license grant is implied. -->

# Privacy — sf-demo-emulator

Reviewed 2026-11-01.

## Scope and responsibility

AEKR maintains this project's notices and is the contact for questions at
[aekr@aekr.io](mailto:aekr@aekr.io). This notice covers a static, browser-only interview showcase with simulated discovery and chat controls.
It does not claim a new legal entity or apply the aekr.io website's analytics,
questionnaire, browser-data email service or retention periods to this repository.

## What the reviewed source does

`data/content.js` supplies the committed profile, résumé, presentation and canned
responses. `js/app.js` keeps discovery edits and chat messages in the current page's
DOM. The reviewed application contains no fetch/XHR collector, account backend,
cookie, local-storage or session-storage persistence. Chat replies are fixed local
text, not messages to an AI model or a support team.

Reloading reinitializes application state from the committed content. That is not
secure erasure of browser history, screenshots or recordings. The committed profile
image and interview material are intentionally public-facing source assets; their
presence does not mean personal data may be reused without permission.

Source evidence: [application](js/app.js), [content](data/content.js), [page](index.html). This is a source review, not a guarantee about every
dependency, host, historical artifact or future deployment.

## Hosting, requests and retention

GitHub processes repository visits and collaboration activity under its
[privacy statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).
If you serve a local copy over HTTP, that server can log requests. Downloading runtimes
or dependencies contacts their providers. Those operations are distinct from collection
implemented by the project itself. No repository-wide anonymous-visitor or zero-log
guarantee is made here.

Public issues, commits and attachments can be retained in history, forks, caches and
clones. Do not submit secrets, personal records or confidential data. For questions,
corrections, access or removal requests about project-held information, contact AEKR;
use [SECURITY.md](SECURITY.md) for a vulnerability report. Requests are considered under
applicable requirements; this notice promises neither a specific legal outcome nor
deletion of copies controlled by other parties. Local files have the retention described
in the [data-handling guide](docs/data-handling.md).
