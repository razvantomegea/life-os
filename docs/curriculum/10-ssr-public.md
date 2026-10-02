# Phase 10 — SSR / hybrid rendering (public page)

## Goal

Ship one **public** page that justifies server rendering — not SSR for its own sake.

## Example

```text
/u/razvan
```

A public goals/progress (or limited stats) page safe to share.

## Requirements

- Public route with data that can render on the server.
- Choose and document render mode(s): SSR, SSG/prerender, and/or route-level hybrid modes as supported in Angular 22.
- Hydration works without visible content flash bugs you ignore; learn incremental hydration if you opt in.
- Clear **browser vs server** boundaries (no `window` / `localStorage` on server path without guards).
- Private app routes remain authenticated-or-local as you define; public page exposes only intentional data.

## Constraints

- SSR was enabled at scaffold — now use it for real.
- Do not leak private tasks/expenses on the public page.
- Prefer official Angular SSR/hydration docs over blog copy-paste.
- You implement; agent teaches platform boundaries and reviews for SSR-only crashes.

## Concepts practiced

- SSR / SSG / hybrid rendering
- Hydration and incremental hydration
- Route-level render modes
- Browser/server API boundaries
- Public vs private data

## Acceptance criteria

- [ ] `/u/:slug` returns meaningful HTML from the server (View Source / curl shows content).
- [ ] Client hydration attaches without breaking interactivity you intend.
- [ ] No unguarded browser globals on the server render path for this route.
- [ ] You can explain why this page is SSR/SSG and what stays client-only.

## Non-goals

- Full SEO content site
- Multi-tenant SaaS accounts
- PWA offline (Phase 11)
