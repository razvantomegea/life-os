# LifeOS

Personal command center for **tasks, routines, goals, expenses, notes, planning, and statistics**.

This repo is also an **engineering gym**: you build a real local-first app while learning modern Angular, TypeScript, and the web platform. Learning quality beats feature count.

## Stack targets

| Layer | Choice |
|-------|--------|
| Framework | Angular **22** (signals, zoneless, OnPush defaults) |
| Language | TypeScript **6** |
| Forms | Signal Forms (Phase 3+) |
| Async HTTP | `httpResource` / Resource API (Phase 7+) |
| Routing | Angular Router (deep architecture in Phase 9) |
| Rendering | SSR enabled at scaffold; hybrid/public pages in Phase 10 |
| Styles | Plain CSS (modern CSS — no Tailwind in early phases) |
| Unit tests | Vitest |
| E2E | Playwright |
| Persistence | Browser first (localStorage → IndexedDB), API later |

## Status

1. **You** scaffold the blank Angular app — follow [docs/scaffold.md](docs/scaffold.md).
2. Learning governance is in this repo: [AGENTS.md](AGENTS.md), [docs/roadmap.md](docs/roadmap.md), [docs/curriculum/](docs/curriculum/).
3. **Current work:** Phase 1 — [docs/curriculum/01-tasks.md](docs/curriculum/01-tasks.md).

The agent does **not** implement features by default. You write the code.

## Collaboration loop

```text
You decide what to build
        ↓
You ↔ agent discuss / research
        ↓
Agent teaches unfamiliar concepts
        ↓
You design the solution
        ↓
YOU write the code
        ↓
You run it
        ↓
Diagnose together if needed
        ↓
YOU fix
        ↓
Agent reviews
        ↓
You explain what you learned
```

### Useful prompts

- “I want to add filtering. Explain how you’d model this with signals. Don’t implement it.”
- “Don’t fix this yet. Help me diagnose why this signal isn’t updating.”
- “Teach me `computed()` using my current code.”
- “Review what I wrote. Point out problems and modern Angular patterns I missed, but let me fix them.”

## Docs map

| Doc | Purpose |
|-----|---------|
| [AGENTS.md](AGENTS.md) | Wingman rules for AI |
| [docs/scaffold.md](docs/scaffold.md) | `ng new` + Playwright + merge steps |
| [docs/roadmap.md](docs/roadmap.md) | Phase → concept map |
| [docs/curriculum/](docs/curriculum/) | Per-phase briefs (no solutions) |

## Non-goals (for now)

- SaaS parity with Notion / Todoist
- Backend or cloud sync before Phase 7+
- Agent-generated feature implementations
- Extra state libraries (NgRx, etc.) in early phases
