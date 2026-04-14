# @gedeon/contracts

Shared types, Zod schemas, and enums between frontend, backend, and Discord bot.

## Purpose

Single source of truth for every type that crosses an app boundary:
- **Enums** — constant values + Zod schemas + UI labels
- **Schemas** — Zod validation shared by web forms and API
- **Types** — TypeScript types inferred from Zod (never manually written)

## Rule

If a type is consumed by more than one app (`web`, `api`, `discord-bot`), it lives here.
If it's local to one app, it stays in that app.

## Structure

```
contracts/
├── src/
│   ├── enums/
│   │   ├── preferred-mode.ts       # PreferredMode + schema + labels
│   │   ├── availability-option.ts  # AvailabilityOption + schema + labels
│   │   └── index.ts
│   ├── schemas/
│   │   ├── lead-interest.ts        # leadInterestInputSchema, leadInterestSuccessSchema
│   │   └── index.ts
│   ├── types/
│   │   ├── lead-interest.ts        # LeadInterestInput, LeadInterestSuccess (z.infer)
│   │   └── index.ts
│   └── index.ts                    # Public barrel — all exports
├── package.json
└── tsconfig.json
```

## Exports

| Export | Kind | Source |
|---|---|---|
| `PreferredMode` | const object + type | `enums/preferred-mode` |
| `preferredModeSchema` | `z.enum` | `enums/preferred-mode` |
| `PREFERRED_MODE_LABELS` | `Record<string, string>` | `enums/preferred-mode` |
| `AvailabilityOption` | const object + type | `enums/availability-option` |
| `availabilityOptionSchema` | `z.enum` | `enums/availability-option` |
| `AVAILABILITY_LABELS` | `Record<string, string>` | `enums/availability-option` |
| `leadInterestInputSchema` | `z.object` | `schemas/lead-interest` |
| `leadInterestSuccessSchema` | `z.object` | `schemas/lead-interest` |
| `LeadInterestInput` | `z.infer` | `types/lead-interest` |
| `LeadInterestSuccess` | `z.infer` | `types/lead-interest` |

## Adding new contracts

1. Create enum in `enums/` (const + type + schema + labels)
2. Create schema in `schemas/` (Zod objects referencing enums)
3. Create type in `types/` (`z.infer` from schema — never duplicate)
4. Re-export from `src/index.ts`

## Backend mirror

Pydantic models in `apps/api` should mirror these schemas.
The Zod definition is the source of truth.
