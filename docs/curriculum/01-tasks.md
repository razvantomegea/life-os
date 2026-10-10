# Phase 1 — Tasks: Angular fundamentals

## Goal

Build a minimal **Today** task list you could actually use for a day of checkboxes: list tasks, toggle complete, add a task. In-memory only.

## UI sketch

```text
Today
──────────────────────────────
☐ Gym
☐ Buy groceries
☑ Pay electricity bill

[ + Add task ]
```

## Requirements

- Show a titled “Today” view with a list of tasks.
- Each task shows title and completed state (checkbox or equivalent).
- User can toggle completed.
- User can add a task with a title.
- Empty state when there are no tasks (accessible, not a blank void).
- Semantic HTML and basic keyboard use (focusable controls, labels).

## Constraints

- Angular 22 standalone components only.
- State in `signal()` / `computed()` — no NgRx, no external state library.
- No backend, no `localStorage`, no router feature folders yet.
- Plain CSS (modern layout: flex/grid as needed).
- You invent the TypeScript `Task` model (suggested fields conceptually: id, title, completed, priority, dueDate — use only what this phase needs).
- **You write all implementation.** Agent teaches and reviews.

## Concepts practiced

- Standalone components
- Templates and control flow: `@if`, `@for` (track correctly)
- `input()` / `output()`
- `signal()` and light `computed()` if useful
- TypeScript domain models
- Event handling
- Component composition (list / item / add)
- Modern CSS
- Semantic HTML and accessibility basics

## Suggested composition (you decide names)

```text
App shell
  └── Today / task list host
        ├── Task list
        ├── Task item (input task, output toggle)
        └── Add task (output create)
```

## Acceptance criteria

- [x] App runs and shows Today with seed or empty + add.
- [x] Toggle updates completed state without page reload.
- [x] Add appends a task and clears or resets the input appropriately.
- [x] `@for` uses a stable track (e.g. id).
- [x] Interactive elements are labeled / reachable by keyboard.
- [x] You can explain where state lives and what causes re-render.

## Non-goals

- Filtering, search, URL params (Phase 2)
- Full editor form (Phase 3)
- Persistence (Phase 4)

## After you’re done

Ask the agent for a review and a short comprehension check (why state lives where it does; what `@for` track prevents).
