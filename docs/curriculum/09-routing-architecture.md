# Phase 9 — Routing and application architecture

## Goal

Turn the growing app into a navigable product with **feature/domain folders** and clear routes.

## Target routes

```text
/
├── /today
├── /tasks
├── /routines
├── /expenses
├── /goals
├── /analytics
└── /settings
```

## Target structure

```text
app/
├── tasks/
│   ├── task-list/
│   ├── task-editor/
│   └── ...
├── routines/
├── expenses/
├── goals/
├── dashboard/
└── shared/
```

Organize by **domain/feature**, not by `components/` / `services/` / `models/` at the top level.

## Requirements

- Define routes for the areas you have built; stubs OK for not-yet-built areas (with honest empty pages).
- Lazy-load feature routes where it helps learning and startup.
- Shared UI/utilities only in `shared/` when truly cross-cutting.
- Navigation: accessible nav (landmarks, current page indication).
- Preserve query-param behavior from Phase 2 where it still applies.

## Constraints

- Don’t rewrite domains “for purity” — move/re-export carefully.
- Keep zoneless/signal patterns; no Zone.js revival.
- You perform the restructure; agent reviews boundaries and circular deps.

## Concepts practiced

- Angular Router
- Feature architecture
- Lazy loading
- Shared vs feature ownership
- Navigation a11y

## Acceptance criteria

- [ ] Each listed route resolves to a page (real or stub).
- [ ] Feature code primarily lives under its domain folder.
- [ ] Deep link to `/tasks` (etc.) works on refresh (SSR/client as configured).
- [ ] Nav indicates the active section.
- [ ] You can explain what belongs in `shared/` vs a feature.

## Non-goals

- Public SSR profile (Phase 10)
- PWA (Phase 11)
