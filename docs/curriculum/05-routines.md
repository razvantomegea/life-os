# Phase 5 — Routines

## Goal

Add recurring routines with honest domain modeling — not another flat todo list with a “daily” checkbox bolt-on.

## UI sketch

```text
Morning

☑ Vitamins            07:30
☑ Workout             Mon/Wed/Fri
☐ Read 20 min         Daily
☐ Walk 8,000 steps    Daily
```

## Requirements

- Model recurrence with a **discriminated union** (e.g. daily | weekly | weekdays | custom).
- Present routines for “today” (or a chosen day) with completion UI.
- Decide and document:

  > Does completing a routine mutate the template, or create a separate **occurrence**?

- Prefer the design that keeps history and “what’s due today” sane.
- Reuse patterns from tasks (signals, components, repository if Phase 4 done).

## Constraints

- TypeScript unions must be exhaustive where you switch on kind (`never` check).
- No fake “stringly” recurrence if a union fits.
- Keep scope to routines + today’s occurrences; don’t rebuild the entire calendar product.
- You implement; agent challenges the occurrence-vs-template decision.

## Concepts practiced

- Discriminated unions
- Domain modeling tradeoffs
- Time/recurrence edge cases (timezone, week start — document assumptions)
- Reusable list/item patterns across domains

## Acceptance criteria

- [ ] At least daily and weekly (or weekdays) recurrence work for “today”.
- [ ] Completing a routine follows your written occurrence/template rule consistently.
- [ ] Exhaustive handling of recurrence kinds in TypeScript.
- [ ] Persisted if Phase 4 exists (routines + occurrences as needed).
- [ ] You can explain why you rejected the alternative completion model.

## Non-goals

- Full calendar product
- Complex RRULE parity with Google Calendar
- Expenses (Phase 6)
