<!-- (kommiBo) Source-reviewed repository notice; no runtime or license grant is implied. -->

# Licensing and provenance inventory

Reviewed 2026-11-01.

The root LICENSE reserves all rights and requires prior written permission from Ed Lopez. AEKR is the project contact and workflow label; this notice does not transfer ownership or change that permission requirement.

| Component | Evidence and licensing boundary |
|---|---|
| Application, content and interview material | Root `LICENSE`: proprietary, all rights reserved. |
| `assets/profile.jpg` | Personal profile image; legacy `.jpg` path contains PNG bytes. Do not treat publication as consent to reuse a person's image. |
| `assets/codex-mascot.png` | README describes an original AI-generated project mascot; do not imply official OpenAI sponsorship or trademark permission. |
| `assets/salesforce-reference.svg` | Local interview reference mark, not an official Salesforce asset or endorsement. |

## AEKR provenance has a bounded scope

The [AEKR banner notice](../assets/AEKR-BANNER-LICENSE.txt) is copied unchanged from
the AEKR project-branding scaffold. It records the MIT provenance of that upstream
scaffold and any AEKR banner copied from it. Upstream references inside that verbatim
notice describe the toolkit, not a requirement to add its handbook here. It is not a
license for unrelated project code, data, personal material or third-party marks.

The AEKR footer names the workflow used. It neither transfers copyright to AEKR nor
imports the toolkit's CC BY handbook license into this repository. Where no banner
image is present, retaining its provenance notice does not claim that an image is bundled.

## Before redistributing

Check the actual files and installed dependency versions, preserve their applicable
notices, and obtain any missing permissions. A package name, a public repository,
a passing test or a software bill of materials is not itself a grant. This is a bounded
source inventory, not an exhaustive dependency-license or ownership certification.
The [use notes](../TERMS.md) cannot override a license grant.

Reference: [GitHub's repository licensing guidance](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository).

<!-- (kommiBo) Decision guidance and Git-backed history; no relicensing. -->
## Reuse decisions

| Intended action | Applicable boundary |
|---|---|
| View or fork this public repository on GitHub | GitHub's platform permissions apply; they are not a general project license for off-platform distribution or reuse. |
| Copy or adapt the application, slides or interview text | Obtain Ed Lopez's prior written permission under the [project license](../LICENSE), identifying the material and intended use. |
| Reuse the profile image, mascot or Salesforce reference mark | Check the applicable image, personality and trademark permissions separately; project permission alone is not third-party endorsement. |
| Reuse the AEKR scaffold or banner material | Follow the scoped notice above; it does not cover unrelated project files or trademark endorsement. |

For a permission request, identify the repository, commit, exact files, intended use
and distribution. Send that scope to [aekr@aekr.io](mailto:aekr@aekr.io) without personal
inputs or confidential attachments. A request or repository contribution is not an
approval, transfer of ownership or automatic license change.

## Licensing change record

This records changes to license-related files and their effect. Documentation and
terms updates are not presented as a replacement software license.

| Date | Verified change | Effect on project permissions |
|---|---|---|
| 2026-11-01 | [Initial component inventory](https://github.com/edlopezpm-ops/sf-demo-emulator/commit/029ccf193fb951cc026b08f510e2b99b5ece7597) and [AEKR notice provenance](https://github.com/edlopezpm-ops/sf-demo-emulator/commit/057e232b32a6f7bd590f350f16a312c3691a3c18). | Documented existing scopes; did not add a project-wide grant. |
| 2026-11-01 | [Public-visibility correction](https://github.com/edlopezpm-ops/sf-demo-emulator/commit/4d2ea8b2e4b070f76922aeedc099093f7518a874) removed “private” from `LICENSE`. | Proprietary status, reserved rights and prior written permission remained. |
| 2026-11-02 | [User-responsibility terms](https://github.com/edlopezpm-ops/sf-demo-emulator/commit/96dd00a58c359e9ed84a8a933d618e871b20bd24). | Preserved existing licenses and non-waivable rights. |
| 2026-11-12 | Added reuse decisions and this source-linked record. | Clarifies the current permission boundaries; does not relicense project material. |

A future license change needs an explicit owner decision, identified files and rights,
the actual replacement text, and consistent documentation. Preserve third-party notices
and distinguish new terms from permissions already granted for earlier copies.
