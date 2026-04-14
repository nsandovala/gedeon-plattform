# TASKBOARD

## Phase 1 — Validation (Current)

### Done
- [x] Landing page (apps/web) — full static site
- [x] Brand system (colors, fonts, animations)
- [x] InterestForm component with Zod validation
- [x] @gedeon/contracts — enums, schemas, types
- [x] apps/api — FastAPI scaffold with health route
- [x] apps/discord-bot — minimal scaffold
- [x] packages/config, packages/ui — base structure
- [x] docker-compose.yml — PostgreSQL 17
- [x] apps/api — InterestSubmission model + routes
- [x] apps/api — POST /api/interest + GET /api/interest
- [x] InterestForm — connected to real API (fetch)
- [x] InterestForm — error state handling
- [x] scripts/create_tables.py — DB table creation

### Next
- [ ] Install Python deps + run create_tables.py
- [ ] Smoke test: POST + GET /api/interest
- [ ] Form submission → DB → admin list works
- [ ] Fill CONTEXT.md, DECISIONS.md, ROADMAP.md
- [ ] CTA Discord link real

## Phase 2 — Interest Capture (Not started)
- [ ] Admin dashboard (read-only table)
- [ ] Discord bot: /ping, basic commands
- [ ] CORS for production domain

## Phase 3 — Tournament Foundation (Not started)
- [ ] Tournament models + routes
- [ ] Bracket engine
- [ ] Discord bot: tournament commands

## Blocked
- _(nothing)_
