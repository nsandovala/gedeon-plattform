# Gedeon Discord Bot

Bot de Discord para la fase inicial de comunidad y validación de **Gedeon Esport**.

## Objetivo actual

Este bot no es todavía el sistema completo de operaciones de torneos.

En esta fase su objetivo es:

- servir como base técnica real
- validar conexión con Discord
- preparar comandos mínimos
- quedar listo para integrarse con la API de Gedeon
- apoyar comunidad y captación en etapas posteriores

## Stack

- Node.js
- TypeScript
- discord.js
- zod

## Estado actual

### Incluye
- estructura base del bot
- carga de variables de entorno
- registro de comandos/eventos
- comando `/ping`
- evento `ready`
- stub de cliente HTTP hacia la API

### No incluye aún
- lógica de negocio crítica
- integración completa con FastAPI
- comandos de torneos
- almacenamiento de estado propio
- automatización avanzada

## Estructura

```text
src/
  index.ts
  config.ts
  types.d.ts
  commands/
    index.ts
    ping.ts
  events/
    index.ts
    ready.ts
  lib/
    api.ts