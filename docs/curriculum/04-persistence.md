# Phase 4 — Persistence (browser-first)

## Goal

Make LifeOS **local-first** with a clean repository boundary. Climb the persistence ladder deliberately.

## Ladder

```text
localStorage
      ↓
IndexedDB
      ↓
API/backend (Phase 7)
```

## Requirements

1. **localStorage prototype:** serialize/deserialize tasks; survive refresh.
2. **IndexedDB:** move durable storage here; handle async open/read/write errors.
3. **Repository + DI:** UI talks to a task repository abstraction, not to storage APIs directly.

Target boundary:

```text
UI
 ↓
Task domain
 ↓
Task repository
 ↓
IndexedDB (adapter)
```

## Constraints

- No Supabase / hosted DB yet.
- Explicit serialization rules (dates, enums, versioning if you need migrations later).
- Use Angular dependency injection for the repository.
- Keep Signal Forms / list UI working against the repository.
- You implement storage and adapters; agent helps with Web API mental models and design review.

## Concepts practiced

- Web Storage vs IndexedDB
- Async browser APIs
- Serialization and persistence boundaries
- Repository pattern
- Dependency injection
- Failure modes (quota, private mode, corrupted JSON)

## Acceptance criteria

- [ ] Refresh restores tasks from persistence.
- [ ] UI does not import IndexedDB/localStorage directly in components.
- [ ] Repository interface would allow swapping IndexedDB → HTTP later with limited UI change.
- [ ] Errors surface in a user-visible, non-silent way (even if simple).
- [ ] You can explain sync vs async boundaries in your load/save path.

## Design prompt (decide and write down)

> What is the source of truth on startup? How do you avoid double-write races when toggling quickly?

## Non-goals

- Multi-device sync
- Full backend (Phase 7)
