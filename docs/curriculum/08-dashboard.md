# Phase 8 — Dashboard

## Goal

Build a **Today / Week** command-center view that composes existing domains. `computed()` should earn its keep.

## UI sketch

```text
Good morning

TODAY
5 tasks · 2 routines

────────────────────────

WEEK

Tasks completed       82%
Routines completed    76%
Gym                    3x
Spending              1,840 lei

────────────────────────

GOALS

Lose 3kg             ███████░░ 70%
Read 12 books        █████░░░░  50%
Savings              ████████░  85%
```

## Requirements

- Greeting + today’s task/routine counts.
- Weekly aggregates from real data (tasks, routines, expenses).
- Goals section: introduce a minimal Goal model if needed (title, target, progress) — keep it small.
- All summary numbers derived — not hand-maintained parallel counters.
- Works with whatever persistence/API layer you have by this phase.

## Constraints

- Prefer `computed()` over copying totals into writeable signals.
- No fake random stats; empty states when data is missing.
- Visual progress can be CSS; keep accessible text alternatives.
- You implement; agent reviews derivation graph and performance smells (over-broad computes).

## Concepts practiced

- Cross-domain composition
- Meaningful `computed` graphs
- Percentage / progress presentation
- Empty and partial data
- Dashboard information hierarchy

## Acceptance criteria

- [ ] Dashboard numbers match underlying lists for a fixed fixture dataset.
- [ ] Changing a task/routine/expense updates relevant summary after your data flow settles.
- [ ] Goals render with name + progress; zero goals has a clear empty state.
- [ ] You can sketch which signals feed which computeds.

## Non-goals

- Heavy BI charts
- Real-time multiplayer
- Final IA / routing polish (Phase 9 may reorganize URLs)
