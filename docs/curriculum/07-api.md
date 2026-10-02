# Phase 7 — Real API (`httpResource`)

## Goal

Introduce a backend (or mock API) and learn modern Angular async reads with **`httpResource`**, plus mutations and realistic async failure modes.

## Flow

```text
Angular
   ↓
HTTP
   ↓
API
   ↓
Database
```

## Requirements

- Expose at least one domain (tasks or expenses) over HTTP.
- Use `httpResource()` for reactive reads (params from signals; loading/error/value as signals).
- Handle: loading, error, success, empty, stale data, cancellation/races, retry where appropriate.
- At least one mutation path (create/update/delete) with clear UI feedback.
- Attempt **optimistic updates** for one interaction (e.g. toggle complete) with rollback on failure.
- Keep repository/adapter boundary: HTTP becomes another adapter behind the domain API where possible.

## Constraints

- Prefer Angular 22 stable Resource / `httpResource` APIs.
- Fetch is the default HTTP backend in Angular 22 — don’t fight it without reason.
- Backend can be a minimal local server or JSON mock you control — document how to run it.
- You implement client integration; agent teaches resource semantics and race behavior.

## Concepts practiced

- HTTP and signal-driven requests
- Async UI states
- Cancellation / out-of-order responses
- Optimistic UI
- Error and retry policy
- Client/server contract typing

## Acceptance criteria

- [ ] List view loads through `httpResource` (or Resource) and reacts to signal inputs.
- [ ] Loading and error states are visible and recoverable.
- [ ] Rapid filter/param changes do not show stale wrong data as current (or you mitigate explicitly).
- [ ] One optimistic path rolls back correctly on failure.
- [ ] You can explain what `httpResource` tracks vs what you still handle manually for writes.

## Non-goals

- Full production auth system
- Multi-region sync
- Dashboard polish (Phase 8)
