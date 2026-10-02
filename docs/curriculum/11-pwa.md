# Phase 11 — PWA / browser APIs (later)

> **Later phase.** Start only after Phases 1–10 acceptance criteria you care about are solid.

## Goal

Make LifeOS installable and meaningfully usable offline, then (optionally) think about sync.

## Learn

```text
Service Workers
Cache Storage
Web App Manifest
offline behavior
installability
notifications (optional)
background behavior (optional)
```

Possible end state:

```text
Desktop
   ↕
IndexedDB
   ↕
Cloud sync
   ↕
Phone
```

## Requirements (when you start)

- Web App Manifest with name, icons, display mode, start URL.
- Service worker caching strategy you can explain (network-first vs cache-first per asset type).
- Offline shell: app loads; local data from IndexedDB still works for core flows you choose.
- Installability on at least one desktop or mobile browser you test.
- Document what does **not** work offline.

## Optional stretch

- Notifications for routines due (permission-gated).
- Sync + conflict resolution sketch (last-write-wins vs merge) — design doc before code.

## Constraints

- Prefer Angular’s supported PWA / service worker approach for your version.
- Security: only cache what you intend; don’t cache private API responses carelessly.
- You implement; agent reviews caching threats and offline UX honesty.

## Concepts practiced

- Service workers and Cache Storage
- Manifest / installability
- Offline-first UX
- Sync and conflict design (stretch)

## Acceptance criteria

- [ ] App is installable in a target browser.
- [ ] Core offline path you named works with network disabled.
- [ ] You can explain the caching strategy and its failure modes.
- [ ] Public/private data rules still hold when cached.

## Non-goals until explicitly expanded

- Full CRDT multi-device sync product
- Push notification infrastructure at scale
