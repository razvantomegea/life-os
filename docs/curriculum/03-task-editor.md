# Phase 3 — Task editor (Signal Forms)

## Goal

Replace “title-only add” with a real create/edit experience using **Signal Forms**.

## UI sketch

```text
Title
Description
Priority
Due date
Tags
Recurring?   (simple flag or stub — full recurrence is Phase 5)
```

## Requirements

- Create and edit a task through a form.
- Fields: title, description, priority, due date, tags; optional recurring stub if it doesn’t explode scope.
- Validation: required title; sensible constraints on date/priority/tags.
- Accessible forms: labels, error text tied to controls, focus management on submit errors.
- Domain invariants enforced in types and/or schema validation (not only UI).
- Use native date handling thoughtfully (`Date`, ISO strings, or Temporal if you adopt it — be consistent).

## Constraints

- Use Angular 22 **Signal Forms** (stable), not legacy Reactive Forms as the primary approach.
- Keep persistence out unless Phase 4 is already done.
- Prefer type-safe field models; avoid `any`.
- You implement; agent teaches Signal Forms APIs and reviews accessibility.

## Concepts practiced

- Serious TypeScript modeling
- Form state and validation schemas
- Accessible forms
- Date APIs
- Domain invariants and error presentation
- Edit vs create flows

## Acceptance criteria

- [ ] Create flow validates and adds/updates the in-memory (or repo) task list.
- [ ] Edit flow loads existing values and saves changes.
- [ ] Invalid submit shows clear, associated errors; valid submit succeeds.
- [ ] Tags behave predictably (add/remove or comma parse — documented).
- [ ] You can explain Signal Forms model ↔ field ↔ template binding in your code.
- [ ] No reliance on deprecated forms patterns as the main path.

## Non-goals

- Full recurrence engine (Phase 5)
- IndexedDB (Phase 4) unless already in place
- HTTP (Phase 7)
