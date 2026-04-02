# Gedeon Plattform

This repository contains the source code for the Gedeon Platform, a comprehensive suite of tools and services for managing and analyzing research data.

## Repository Structure

The repository is organized as a [pnpm workspace](https://pnpm.io/workspaces), allowing for efficient management of multiple related packages.

```
gedeon-plattform/
├── apps/                    # Applications and services
│   ├── api/                 # Backend API
│   ├── dashboard/           # Frontend dashboard
│   └── ...                  # Other applications
├── packages/                # Shared packages and libraries
│   ├── ui/                  # UI components
│   ├── utils/               # Utility functions
│   └── ...                  # Other shared packages
├── pnpm-workspace.yaml      # Workspace configuration
├── turbo.json               # Build system configuration
└── package.json             # Root package.json
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version specified in `package.json`)
- [pnpm](https://pnpm.io/)

### Installation

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Build the project:
   ```bash
   pnpm run build
   ```

3. Run the development server:
   ```bash
   pnpm run dev
   ```

## Development

### Scripts

The root `package.json` provides several scripts for development:

- `pnpm run dev`: Start all development servers
- `pnpm run build`: Build all packages
- `pnpm run test`: Run all tests
- `pnpm run lint`: Lint all packages

### Workspaces

To run scripts in specific packages, use the `-r` flag:

```bash
# Run build in the api package
pnpm run build -r api

# Run dev in the dashboard package
pnpm run dev -r dashboard
```

## License

[Nelson sandoval - 2026]

# # Gedeon Platform

Monorepo para validar el regreso de **Gedeon Esport** como comunidad, marca y futura plataforma de torneos.

## Objetivo actual

Este proyecto nace como una fase de **validación ligera** antes de invertir fuerte en producto.

La meta inicial no es construir todo el sistema de torneos, sino validar:

- interés real de la comunidad
- formatos más atractivos
- disposición a participar
- intención de unirse al Discord
- feedback sobre el futuro sistema

## Fase actual

**Informativa + captación + feedback + dashboard admin simple**

### Incluye
- Web pública informativa
- Formulario de interés
- Acceso admin básico para revisar registros
- Base para integración futura con bot de Discord
- Conexión futura con Sentinel Board y BracketFlow

## Stack

### Frontend
- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui

### Backend
- FastAPI
- PostgreSQL
- SQLAlchemy
- Alembic

### Bot
- Node.js
- TypeScript
- discord.js

## Estructura

- `apps/web`: sitio público + admin ligero
- `apps/api`: API central
- `apps/discord-bot`: bot de Discord
- `packages/contracts`: tipos y contratos compartidos
- `.agents/`: manifests, skills y playbooks para desarrollo asistido
- `docs/`: decisiones, arquitectura y producto

## Objetivo de validación

Se considera una señal positiva si el proyecto logra:
- 100 registros reales
- actividad mínima en Discord
- feedback favorable sobre el regreso de Gedeon
- interés claro por formatos de torneo

## Principios

- construir poco, pero útil
- validar antes de escalar
- separar marca, comunidad y motor de torneos
- usar la web como capa informativa y de captación
- mantener la API como futura fuente de verdad

## Roadmap corto

### Fase 1
- landing pública
- CTA a Discord
- formulario de interés
- dashboard admin mockup

### Fase 2
- persistencia real con API
- bot de Discord básico
- eventos y check-in ligero

### Fase 3
- validación de pilotos
- feedback loops
- decisión de inversión en BracketFlow

## Estado

Arquitectura inicial creada.  
Pendiente: llenar apps, docs y contratos base.