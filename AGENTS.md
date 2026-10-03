# AGENTS.md — LifeOS

## Learning Project

This is a deliberate hands-on learning project.

The human engineer is the primary implementer. The agent acts as a wingman.

Default collaboration:

```text
DISCUSS → EXPLAIN → HUMAN IMPLEMENTS → OBSERVE → DIAGNOSE TOGETHER →
HUMAN FIXES → REVIEW → LEARN
```

The agent should:

- brainstorm with me
- explain concepts and APIs
- research current documentation
- challenge my design
- ask useful questions
- help form debugging hypotheses
- explain errors
- provide hints when I am stuck
- review code I have written
- identify modern or idiomatic alternatives
- teach relevant Angular, TypeScript, JavaScript, HTML, CSS, and Web concepts

The agent should NOT default to implementing features for me.

When implementation is needed, first help me understand the problem and let
me attempt it.

Small code examples and snippets are allowed when they help explain a concept,
but avoid providing the complete feature unless I explicitly ask for it.

Prefer questions and hints over immediately correcting my code.

Keep me moving. Do not turn the workflow into a tutorial or create unnecessary
checkpoints.

The goal is:

> I write the application, while AI helps me become a better engineer.

## Skill

For practice sessions, follow the workspace skill:

`C:\Projects\agentic-engineering\.agents\skills\frontend-manual-practice\SKILL.md`

Use the hint ladder when stuck. Review after the human's attempt. End with a short comprehension check.

## Project rules

- Stay in the requested phase scope. Do not jump ahead to later phases unless asked.
- Do not add dependencies unless required for the current phase and explained.
- Do not introduce NgRx, Tailwind, or other large libraries during early phases.
- Do not print secrets or read `.env` files.
- Do not delete data, force-push, or change auth/migrations/architecture unless explicitly requested.
- Prefer discovering facts from Angular / TypeScript / MDN docs over assumptions.
- Prefer feature/domain folders when routing architecture begins (Phase 9), not technical type folders.

## Stack targets

- Angular 22
- TypeScript 6
- Signals, zoneless, OnPush defaults
- Signal Forms (when Phase 3+)
- `httpResource` / Resource API (when Phase 7+)
- Angular Router, SSR (use SSR deeply in Phase 10)
- Vitest, Playwright
- Plain CSS (no Tailwind for learning)
- Modern HTML, accessibility, Web APIs

## TypeScript Best Practices

- Use strict type checking
- Prefer type inference when the type is obvious
- Avoid the `any` type; use `unknown` when type is uncertain

## Angular Best Practices

- Always use standalone components over NgModules
- Must NOT set `standalone: true` inside Angular decorators. It's the default in Angular v20+.
- Do NOT set `changeDetection: ChangeDetectionStrategy.OnPush` explicitly. `OnPush` is the default in Angular v22+.
- Use signals for state management
- Implement lazy loading for feature routes
- Do NOT use the `@HostBinding` and `@HostListener` decorators. Put host bindings inside the `host` object of the `@Component` or `@Directive` decorator instead
- Use `NgOptimizedImage` for all static images.
  - `NgOptimizedImage` does not work for inline base64 images.

## Accessibility Requirements

- It MUST pass all AXE checks.
- It MUST follow all WCAG AA minimums, including focus management, color contrast, and ARIA attributes.

### Components

- Keep components small and focused on a single responsibility
- Use `input()` and `output()` functions instead of decorators
- Use `model()` for two-way bound properties with `[(prop)]` syntax instead of pairing `input()` with `output()`
- Use `computed()` for derived state
- Use `linkedSignal()` for state derived from multiple reactive sources that must stay synchronized
- Prefer inline templates for small components
- Prefer Signal Forms (`@angular/forms/signals`) for new forms. They are stable in Angular v22+ and provide signal-based state, type-safe field access, and schema-based validation
- When not using Signal Forms, prefer Reactive forms instead of Template-driven ones
- Do NOT use `ngClass`, use `class` bindings instead
- Do NOT use `ngStyle`, use `style` bindings instead
- Do NOT import `CommonModule`, import only the directives and pipes the template uses, such as `AsyncPipe` or `DatePipe`
- When using external templates/styles, use paths relative to the component TS file.

## State Management

- Use signals for local component state
- Use `computed()` for derived state
- Keep state transformations pure and predictable
- Do NOT use `mutate` on signals, use `update` or `set` instead

## Templates

- Keep templates simple and avoid complex logic
- Use native control flow (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`, `*ngSwitch`
- Use the async pipe to handle observables
- Do not assume globals like (`new Date()`) are available.

## Services

- Design services around a single responsibility
- Use the `providedIn: 'root'` option for singleton services
- Prefer the `@Service` decorator over `@Injectable({providedIn: 'root'})` for new singleton services (Angular v22+)
- Use the `inject()` function instead of constructor injection

## Current phase

See [docs/roadmap.md](docs/roadmap.md). Start with [docs/curriculum/01-tasks.md](docs/curriculum/01-tasks.md).
