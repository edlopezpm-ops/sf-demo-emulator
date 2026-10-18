<!-- (kommiBo) Operator-assisted, source-derived engineering note; synthetic examples only. -->
# Engineering notes

Practical walkthroughs for the existing static interview demo. They identify real handlers, data fields, DOM state and manual review limits.

Source baseline: [`2ddb01b8c8fa0ab557c7a92c6b544415ed84060b`](https://github.com/edlopezpm-ops/sf-demo-emulator/tree/2ddb01b8c8fa0ab557c7a92c6b544415ed84060b). Each note links the owning implementation. Expected browser behavior is source-derived unless an execution receipt explicitly says otherwise.

## Reading paths

- [Trace startup from content to rendered views](startup-data-flow.md)
- [Rehearse slide navigation at both boundaries](slide-wraparound.md)
- [Verify direct slide selection and dot labels](slide-dot-targets.md)
- [Keep visible slides and speaker notes aligned](speaker-note-rehearsal.md)
- [Trace presentation, resume, discovery and questions views](view-navigation.md)
- [Locate resume fields and repeated strength cards](resume-projection.md)
- [Check profile expansion and the resume shortcut](profile-menu-shortcut.md)
- [Exercise both theme directions without losing content state](theme-state.md)
- [Demonstrate the lifetime of discovery field edits](discovery-draft-lifetime.md)
- [Map feature toggles to all matching elements](feature-visibility.md)
- [Separate compact spacing from responsive layout](compact-density.md)
- [Explain the stage meter as position rather than workflow progress](stage-meter.md)
- [Follow canned chat prompts from footer and widget](chat-seed-routing.md)
- [Check whitespace handling and literal user text in chat](chat-form-text.md)
- [Review the two responsive layout breakpoints](responsive-breakpoints.md)
- [Run a bounded keyboard and accessible-name review](keyboard-accessibility.md)
- [Check local assets without rewriting the profile contract](asset-contract-review.md)

## Documentation pattern provenance

These notes adapt four documentation practices from the public `checktimecardandgivefeedback` dossier at commit `235a70f1613f9a7c19515b3a579d7539dcff6b47`:

- [00-START-HERE.md](https://github.com/edlopezpm-ops/checktimecardandgivefeedback/blob/235a70f1613f9a7c19515b3a579d7539dcff6b47/00-START-HERE.md): pin the reviewed source and state the evidence boundary.
- [01-architecture-and-stack.md](https://github.com/edlopezpm-ops/checktimecardandgivefeedback/blob/235a70f1613f9a7c19515b3a579d7539dcff6b47/01-architecture-and-stack.md): identify each component's responsibility and follow data across boundaries.
- [07-security-privacy-quality-and-evidence.md](https://github.com/edlopezpm-ops/checktimecardandgivefeedback/blob/235a70f1613f9a7c19515b3a579d7539dcff6b47/07-security-privacy-quality-and-evidence.md): distinguish source checks, executed examples and human observations.
- [09-improvement-review-guide-and-open-decisions.md](https://github.com/edlopezpm-ops/checktimecardandgivefeedback/blob/235a70f1613f9a7c19515b3a579d7539dcff6b47/09-improvement-review-guide-and-open-decisions.md): use concrete inputs, expected outcomes, negative cases and explicit limits.

This is attribution of documentation patterns. The dossier's timeKER architecture, functionality, release evidence and acceptance status do not describe this repository. Examples here are synthetic and do not supply production or human acceptance evidence.
