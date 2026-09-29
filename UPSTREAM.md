# Upstream review

This independent fork preserves the legacy `url@0.11.4` API, not the WHATWG URL constructor. Source: https://github.com/defunctzombie/node-url/tree/455a3e2106bf254498615efc50a8dd5527be4132. Original license and authors are retained. The exact npm artifact and file hashes are recorded in `.stackline/upstream.json`.

## Open issue triage

Reviewed the open issue bodies collected on 2026-09-29:

- [#32](https://github.com/defunctzombie/node-url/issues/32): reproduced protocol case changing the hostless payload. Normalize before protocol-table lookups; regression tests cover lower, upper and mixed case.
- [#48](https://github.com/defunctzombie/node-url/issues/48): reproduced ignored slashes:false for a protocol-less host. Fixed with explicit false/true/default and https/mailto regressions.
- [#25](https://github.com/defunctzombie/node-url/issues/25): array and nested-object serialization already works in 0.11.4 through qs. No change or claim of a new fix.
- #35: ws protocol parsing works for the reported protocol shape on this base. No new fix claimed.
- #5 and #40 concern interpreting strings without a protocol as a hostname. The legacy parser deliberately accepts relative paths; changing this heuristic is outside a compatible maintenance release.
- #33, #36, #37 and #63 request WHATWG URL/searchParams/pathToFileURL APIs absent from the selected legacy contract. No unsupported new export is advertised.
- #24 and #53 request a newer base or roadmap. The original consumer needs the existing legacy API; this release documents an explicit maintained compatibility line.
- #75 requests release notes. This fork adds CHANGELOG and immutable GitHub releases.

Upstream functional tests and the focused regressions run against source and the final tarball. Full dependency audits, CI, CodeQL, exact artifact/provenance verification and direct/aliased installs gate the GitHub publication. No claims about unsupported APIs or exhaustive historical issue coverage are made.
