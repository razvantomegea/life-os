# Phase 2 — Filtering and derived state

## Goal

Filter and search the task list with derived state from signals, then wire filters to the URL.

## UI sketch

```text
[ All ] [ Today ] [ Completed ]

Search: __________

3 remaining
```

## Requirements

- Filter modes: All, Today, Completed (define “Today” using your `dueDate` / domain rules).
- Text search over task title (and description if you have it).
- Show remaining count (incomplete tasks in the current filtered set, or global — pick one and document it).
- Sorting (e.g. by due date, then priority, then title — you choose a clear order).
- Sync primary filter (and optionally search) with **URL query parameters** so refresh/share restores state.

## Constraints

- Derive UI lists with `computed()` from source `signal`s — do not duplicate filtered arrays in imperative copies unless you can justify it.
- Still no backend / IndexedDB (unless you already finished Phase 4 early — prefer not).
- Router query params: learn Angular Router APIs appropriate for Angular 22.
- You implement; agent explains signals ↔ template data flow.

## Concepts practiced

```text
signal  →  computed  →  template
```

- Deep signals mental model (who writes, who derives)
- Filter / search / sort as pure projections
- URL as state (query params)
- Avoiding redundant state

## Acceptance criteria

- [ ] Changing filter updates the list without mutating the source list incorrectly.
- [ ] Search narrows results; empty search shows filter-only results.
- [ ] Remaining count matches your documented rule.
- [ ] Sort order is deterministic and explained.
- [ ] Query params round-trip: load URL → UI matches; change UI → URL updates.
- [ ] You can draw the signal → computed → template flow for your code.

## Non-goals

- Signal Forms editor (Phase 3)
- Persistence layer (Phase 4)
