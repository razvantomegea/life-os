# LifeOS roadmap

Each phase adds one coherent slice of product **and** one cluster of engineering skills. Do not build everything upfront.

```text
Task list
  → Angular fundamentals

Filtering
  → Signals deeply

Task editor
  → Signal Forms

Persistence
  → Browser APIs + DI + repositories

Routines
  → Advanced TypeScript modeling

Expenses
  → Data transformation + Intl

API
  → httpResource + async state

Dashboard
  → Cross-domain computed state

Multiple pages
  → Router + feature architecture

Public pages
  → SSR / SSG / hydration

Offline
  → Service Workers / PWA

Sync (later)
  → Conflict resolution / multi-device
```

## Phase index

| Phase | Brief | Concepts |
|-------|-------|----------|
| 1 | [curriculum/01-tasks.md](curriculum/01-tasks.md) | Standalone components, templates, signals, composition, a11y, CSS |
| 2 | [curriculum/02-filtering.md](curriculum/02-filtering.md) | `computed`, filters, search, sort, URL query params |
| 3 | [curriculum/03-task-editor.md](curriculum/03-task-editor.md) | Signal Forms, validation, dates, tags |
| 4 | [curriculum/04-persistence.md](curriculum/04-persistence.md) | localStorage → IndexedDB, repository, DI |
| 5 | [curriculum/05-routines.md](curriculum/05-routines.md) | Recurrence unions, occurrences vs templates |
| 6 | [curriculum/06-expenses.md](curriculum/06-expenses.md) | Money, `Intl`, aggregation, simple charts |
| 7 | [curriculum/07-api.md](curriculum/07-api.md) | HTTP, `httpResource`, loading/error/stale/optimistic |
| 8 | [curriculum/08-dashboard.md](curriculum/08-dashboard.md) | Cross-domain summaries with `computed` |
| 9 | [curriculum/09-routing-architecture.md](curriculum/09-routing-architecture.md) | Feature folders, app routes |
| 10 | [curriculum/10-ssr-public.md](curriculum/10-ssr-public.md) | Hybrid rendering, public profile page |
| Later | [curriculum/11-pwa.md](curriculum/11-pwa.md) | PWA, offline, installability |

## Target product shape (eventually)

```text
/
├── /today
├── /tasks
├── /routines
├── /expenses
├── /goals
├── /analytics
├── /settings
└── /u/:slug          (public, SSR — Phase 10)
```

Feature folders (Phase 9), not type folders:

```text
app/
├── tasks/
├── routines/
├── expenses/
├── goals/
├── dashboard/
└── shared/
```

## Persistence evolution

```text
in-memory (Phase 1–3)
    ↓
localStorage
    ↓
IndexedDB + repository (Phase 4)
    ↓
HTTP API (Phase 7)
    ↓
sync / conflict resolution (after PWA)
```

## Rule

Finish a phase’s **acceptance criteria** and be able to **explain** the concepts before starting the next brief.
