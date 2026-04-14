# @gedeon/config

Shared configuration for the Gedeon platform.

## Purpose

Centralizes reusable configuration consumed by apps and packages:
- TypeScript base configs
- ESLint shared rules
- Environment variable schemas

## Phase 1

Minimal — each app maintains its own config. This package will grow when cross-app config standardization is needed.

## Structure

```
config/
├── ts/          # Shared tsconfig bases (future)
├── eslint/      # Shared lint rules (future)
└── env/         # Env var schemas (future)
```
