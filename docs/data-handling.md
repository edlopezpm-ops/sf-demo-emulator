<!-- (kommiBo) Source-reviewed repository notice; no runtime or license grant is implied. -->

# Safe data handling and publication

Reviewed 2026-11-01.

This is an operator checklist for a static, browser-only interview showcase with simulated discovery and chat controls, not a claim that these controls
are automatically enforced by the code.

1. Use invented customer details in discovery fields and chat demonstrations.
   There is no backend submission or real support recipient for those controls.
2. Treat screen sharing and recordings as disclosures. Review the résumé, profile
   image, notes and any manually entered customer details before presenting.
3. Reload to reset the application's DOM state. Do not describe this as deletion of
   browser artifacts, downloads, recordings or information already seen by others.
4. If using the optional local HTTP server, bind it to `127.0.0.1`. Serve a copy that
   contains no private notes; Python's simple server is not authenticated hosting.
5. A future public deployment must review server logs, HTTPS, dependencies and any
   added collection before adopting this local-demo notice as its policy.

There is no project-managed archive or retention timer for entered demo text. Browser
and host behavior remain separate from the reviewed application's in-memory state.

## Review before publishing

Check the complete staged diff and all attachments, not just source extensions. Reject
secrets, real customer records, personal documents and unexplained binary exports.
Use synthetic reproductions in public discussions. If information is already public,
contact AEKR through [the privacy notice](../PRIVACY.md); changing the current file
does not erase Git history or third-party copies. Rotate an exposed credential through
its provider rather than relying on a later Git deletion.
