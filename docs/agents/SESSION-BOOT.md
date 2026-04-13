# Session Boot

## Objetivo

Este documento define cómo iniciar correctamente cualquier sesión de trabajo con un agente, modelo local o entorno asistido.

La meta es que ninguna sesión parta “a ciegas” y tengan una memoria base y contexto.

---

## Session Boot Protocol

Antes de pedir implementación o cambios, el agente debe leer:

1. `CONTEXT.md`
2. `docs/adr/DECISIONS.md`
3. `ROADMAP.md`
4. `TASKBOARD.md`

Y luego, según la tarea:

### Tarea visual
- `docs/product/brand-guide.md`
- `docs/product/visual-system.md`
- `docs/product/shield-brief.md`

### Tarea de arquitectura
- `docs/architecture/ARCHITECTURE.md`

### Tarea de agentes o workflow
- `.agents/skills/*.md`
- `.agents/playbooks/*.md`
- `.agents/manifests/*.yaml`

---

## Resumen obligatorio antes de actuar

Todo agente debe responder primero:

### 1. Qué está construido
### 2. Qué toca ahora
### 3. Qué no se debe tocar aún

Si no puede responder eso, no debe implementar todavía.

---

## Prompt base de arranque

Usar este bloque al iniciar una sesión nueva:

```md
Lee primero:
- CONTEXT.md
- docs/adr/DECISIONS.md
- ROADMAP.md
- TASKBOARD.md

Luego resume:
1. qué está construido
2. qué toca ahora
3. qué no se debe tocar aún

Respeta el stack confirmado:
- Next.js
- FastAPI
- PostgreSQL
- discord.js

No propongas Firebase como base principal.
No saltes a OCR, anticheat, relay o automatización total.
Trabaja solo dentro de la fase actual.