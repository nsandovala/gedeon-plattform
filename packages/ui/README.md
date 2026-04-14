# @gedeon/ui

Shared UI components for the Gedeon platform.

## Purpose

Reusable, brand-aligned UI components consumed by `apps/web` and future frontends.
All components follow the Spartan editorial esports aesthetic defined in `docs/product/brand-guide.md`.

## Phase 1

Empty scaffold. Currently `apps/web` implements its own UI inline.
When duplication appears or an admin dashboard is built, components will migrate here.

## Stack (planned)

- React
- Tailwind CSS
- shadcn/ui (base primitives)

## Structure

```
ui/
├── src/
│   ├── components/   # Button, Card, Input, Badge, etc.
│   ├── primitives/   # Low-level styled atoms
│   └── index.ts      # Public barrel
├── package.json
└── tsconfig.json
```

## Brand colors (reference)

See `apps/web/src/app/globals.css` for CSS custom properties.
When this package is active, colors will be exposed as design tokens.
