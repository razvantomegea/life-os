# Scaffold LifeOS (human)

The agent does **not** run `ng new` for this project. You create the Angular app, then keep the learning docs already in this folder.

## Prerequisites

- Node.js **22+** (Angular 22 dropped Node 20; Node 26 is supported)
- `pnpm` available on PATH

## Create the Angular 22 app

This folder already contains learning docs (`AGENTS.md`, `README.md`, `docs/`). `ng new` usually refuses a non-empty directory, so scaffold into a sibling folder, then merge.

From `C:\Projects`:

```bash
pnpm dlx @angular/cli@22 new life-os --directory=life-os --routing --ssr --style=css --package-manager=pnpm --defaults
```

Optional Cursor AI config from CLI (project `AGENTS.md` still wins):

```bash
pnpm dlx @angular/cli@22 new life-os --directory=life-os --routing --ssr --style=css --package-manager=pnpm --defaults --ai-config=cursor
```

### Merge into `life-os`

1. Copy everything from `life-os/` into `life-os/` **except** do not overwrite:
   - `AGENTS.md`
   - `README.md` (or merge carefully: keep LifeOS learning sections)
   - `docs/`
2. Delete `life-os/` when done.
3. From `life-os/`:

```bash
pnpm install
pnpm start
```

## Verify versions

Confirm in `package.json`:

- `@angular/*` → **22.x**
- `typescript` → **6.x**
- Unit tests use **Vitest** (`ng test`)

Confirm the generated app uses standalone components and Angular 22 defaults (zoneless / OnPush as shipped).

## Add Playwright

```bash
cd C:\Projects\life-os
pnpm ng e2e
```

Choose **Playwright** when prompted, or add it with the current CLI-recommended `ng add` path if the prompt differs.

## Do not implement Phase 1 yet

Read [curriculum/01-tasks.md](curriculum/01-tasks.md) first. Then implement yourself; use the agent as wingman per [AGENTS.md](../AGENTS.md).
