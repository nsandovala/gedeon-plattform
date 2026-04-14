# Agents Docs

Esta carpeta contiene documentación humana de alto nivel sobre cómo se organiza, coordina y utiliza el sistema de agentes dentro de **Gedeon Platform**.

## Propósito

Separar claramente:

- **`.agents/`** → capa operativa para agentes
  - manifests
  - skills
  - playbooks
  - reglas ejecutables / estructuradas

- **`docs/agents/`** → documentación humana
  - roles
  - flujo de trabajo
  - reglas de coordinación
  - onboarding de sesiones
  - uso correcto del contexto compartido

## Qué vive aquí

### `README.md`
Explica el propósito de esta carpeta y cómo se relaciona con `.agents/`.

### `AGENT-WORKFLOW.md`
Describe el flujo recomendado de trabajo entre agentes, sesiones y fases del proyecto.

### Archivos futuros sugeridos
- `TEAM-ROLES.md`
- `SESSION-BOOT.md`
- `HANDOFF-RULES.md`
- `AGENT-GOVERNANCE.md`

## Regla principal

Los agentes no deben trabajar como entidades aisladas ni depender solo del contexto de chat.

Todo agente o sesión debe apoyarse en:

- `CONTEXT.md`
- `docs/adr/DECISIONS.md`
- `ROADMAP.md`
- `TASKBOARD.md`

## Filosofía

Este proyecto usa agentes como apoyo de desarrollo, no como reemplazo del criterio arquitectónico.

Los agentes deben:
- respetar la fase actual
- evitar sobreingeniería
- trabajar por bloques pequeños
- dejar trazabilidad
- operar con memoria compartida

## Recordatorio importante

El problema principal no es generar código.
El problema principal es **mantener continuidad y coherencia entre sesiones, herramientas y agentes**.

Por eso esta carpeta existe.