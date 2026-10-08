<!-- (kommiBo) Operator-assisted maintenance; source-reviewed documentation. -->
# Static demo validation: change boundaries and recovery

| Layer | Preserve during recovery |
| --- | --- |
| Content | `data/content.js`; keep personal-facing copy and profile information out of unrelated maintenance changes. |
| Structure | `index.html` IDs and script order. |
| Behavior | `js/app.js` selectors and event wiring. |
| Presentation | `css/styles.css`, image references, and the existing profile-image path. |
| Documentation index | `docs/README.md` is managed by kommiBo; add or edit source documents and let the engine reconcile its index. |

This repository is a static demonstration. A repository merge does not prove a deployment, authentication, server-side persistence, or delivery of a real chat message. Reverting source likewise does not alter any external hosting system.

## Recover through a reviewed PR

1. Read the current default branch and preserve the failing PR URL, its head SHA, and the relevant CI log. Distinguish an infrastructure failure from a changed project contract.
2. Create a separate recovery branch from the latest default branch. Inspect the original change and later dependent commits before choosing a corrective edit or `git revert`.
3. For a squash commit, revert that commit on the recovery branch. For a merge commit, inspect its parents and deliberately select the mainline; do not blindly copy a `-m` value. Resolve conflicts explicitly and preserve unrelated later work.
4. Run the [repository validation](validation-guide.md), inspect the diff, and open a recovery PR. Record the reason and the original PR/commit it compensates for.
5. Require the configured CI and separate reviewer approval on the current head. If the head changes, verify its checks and review again. Merge through the normal branch rules without bypass.
6. Verify the merge SHA on GitHub and the resulting default-branch validation. A successful local command or PR creation is not proof of merge completion.

Do not force-push the default branch or delete pre-existing files as a recovery shortcut. If kommiBo reports an uncertain effect, preserve its operation/run identity and reconcile it before submitting duplicate work. Writer and reviewer accounts are separate technical actors under one HOC; this is not an independent audit.
