# Gedeon Platform / BracketFlow — CONTEXT.md

## Estado actual del proyecto

Este repositorio forma parte de una fase de validación y construcción progresiva del ecosistema Gedeon / BracketFlow.

La prioridad actual NO es construir el sistema completo de torneos automatizados.
La prioridad actual es:

1. validar interés real en el regreso de Gedeon Esport
2. construir una web pública con identidad fuerte
3. preparar un flujo básico de comunidad y captación
4. sentar la arquitectura técnica y operativa correcta
5. dejar una base de agentes y memoria compartida para trabajo asistido

## Identidad del proyecto

La dirección visual y conceptual actual de Gedeon Esport se define como:

- Tactical Geometric Minimalism
- Spartan Quantum Minimalism
- sobrio, premium, geométrico, vivo
- mezcla de táctica espartana, geometría inteligente y pulso geek minimalista

## Estado actual construido

### Confirmado
- monorepo creado
- estructura principal de carpetas creada
- docs base creados
- brand guide creado
- visual system creado
- shield brief creado
- hero principal de la web rediseñado y aprobado como checkpoint visual
- push realizado al repositorio
- secrets limpiados del historial (BFG Repo-Cleaner)

### Web (apps/web)
- home completa — landing page con 6 secciones
- hero "Orbital Shield System" aprobado
- formulario de interés con Zod validation
- InterestForm conectado a API real (fetch) con loading/success/error states
- build limpio, TypeScript clean
- próximo: confirmar flujo completo con DB real

### Backend (apps/api)
- FastAPI scaffold completo
- modelo InterestSubmission (SQLAlchemy async)
- rutas: GET /health, POST /api/interest, GET /api/interest
- CORS configurado para localhost:3000
- schemas Pydantic con alias para compatibilidad con Zod
- scripts/create_tables.py para inicialización
- docker-compose.yml con PostgreSQL 17
- `pool_pre_ping=True` y `pool_recycle=300` agregados a db.py
- **bug activo**: `GET /api/interest` devuelve 500 (ConnectionDoesNotExistError)
- **handoff actual**: `docs/agents/HANDOFF-INTEREST-BACKEND-2026-04-21.md`
- **NOTA**: El 422 en POST por JSON inválido NO es un bug estructural

### Discord bot (apps/discord-bot)
- scaffold con src/, commands/, events/, lib/
- /ping command registrado
- ready event funcional
- bot autenticó correctamente con Discord API
- fix aplicado: evento `ready` (no `clientReady`)

### Contracts (packages/contracts)
- enums: PreferredMode, AvailabilityOption
- schemas Zod: leadInterestInputSchema, leadInterestSuccessSchema
- types: LeadInterestInput, LeadInterestSuccess
- exports consolidados en barrel único
- fix aplicado: quitadas extensiones .js para compatibilidad Turbopack

### Packages
- @gedeon/config — scaffold base
- @gedeon/ui — scaffold base
- @gedeon/contracts — funcional, usado por web y api

### Infra
- docker-compose.yml — PostgreSQL 17 (pendiente confirmar en Mac)
- turbo.json — pipelines configurados
- pnpm-workspace.yaml — workspace definido

## Stack confirmado

### Frontend
- Next.js
- TypeScript
- Tailwind CSS

### Backend
- FastAPI
- Python

### Base de datos
- PostgreSQL

### Bot
- Node.js + discord.js

### Gobernanza de agentes
- YAML para manifests/configuración
- Markdown para memoria, playbooks y contexto

## Decisión importante sobre Firebase

Por ahora NO usar Firebase / Firestore como base principal.

Motivo:
- el dominio de torneos y validación requiere relaciones fuertes, auditoría, historial y lógica de estado
- PostgreSQL será la fuente de verdad principal
- Firebase solo podría evaluarse más adelante para casos auxiliares, pero no es necesario en esta fase

## Qué NO hacer todavía

- no construir OCR real todavía
- no construir anticheat real todavía
- no construir relay RTMP todavía
- no sobreingenierizar el sistema de torneos
- no meter Firebase antes de tener una necesidad real
- no dispersar el trabajo entre agentes sin actualizar este archivo

## Próximo foco de trabajo

1. terminar de estabilizar la home pública
2. construir formulario de interés
3. preparar contracts compartidos
4. iniciar bot Discord mínimo
5. luego comenzar API + PostgreSQL
6. después evaluar piloto de datos y comunidad
7. más adelante recién iniciar BracketFlow core

## Convención para todos los agentes

Antes de proponer o implementar algo:
1. leer este archivo
2. respetar el stack confirmado
3. no introducir tecnologías nuevas sin justificación
4. no saltarse fases del roadmap
5. trabajar por bloques pequeños y verificables

## Regla de oro

Este proyecto se construye con validación progresiva.
Primero comunidad y señal real.
Después sistema y automatización.
No al revés.