# Phase 6 — Expenses

## Goal

Add an expenses domain with money-safe thinking, formatting via platform APIs, and derived monthly summaries.

## UI sketch

```text
October
────────────────────────
Income        15,000 lei
Expenses       8,400 lei
Available      6,600 lei

Housing        3,000
Food           1,600
Transport        700
Gym              250
Other          2,850
```

## Requirements

- Record income and expenses with category, amount, date, optional note.
- Monthly summary: income, expenses, available.
- Category breakdown for the selected month.
- Format money and dates with `Intl.NumberFormat` / `Intl.DateTimeFormat` (Romanian locale / `lei` is fine).
- Prefer integer minor units (e.g. bani) or another explicit money representation — avoid naive float cash math.
- Simple visualization (CSS bars or canvas/SVG) — avoid a heavy chart library unless justified.

## Constraints

- New domain module/services following the repository boundary if Phase 4 exists.
- Pipes or formatting helpers are fine; don’t invent a mini-framework.
- You implement; agent reviews money model and i18n usage.

## Concepts practiced

- Advanced TypeScript domain types
- Money representation
- `Intl` APIs
- Aggregation and derived state
- Reusable presentational pieces
- Light visualization without dependency sprawl

## Acceptance criteria

- [ ] Add/list expenses and income for a month.
- [ ] Totals and category sums match raw entries.
- [ ] Formatting is locale-aware and consistent.
- [ ] Money math does not rely on uncontrolled floating point for storage.
- [ ] You can explain your money type and month-boundary rules.

## Non-goals

- Bank sync
- Full double-entry accounting
- HTTP API (Phase 7)
