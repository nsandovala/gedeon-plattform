# ADR-001 — Monorepo for Gedeon Platform

## Status
Accepted

## Context
El proyecto necesita coordinar:
- web pública
- API futura
- bot de Discord
- contratos compartidos
- documentación
- desarrollo asistido por agentes

## Decision
Se utilizará un monorepo con apps separadas para web, api y discord-bot.

## Consequences
### Positivas
- visión unificada
- contratos consistentes
- menos duplicación
- mejor integración futura

### Negativas
- requiere disciplina de carpetas
- puede crecer rápido si no se controla el scope