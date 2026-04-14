# Gedeon Platform — Architecture

## 1. Propósito

Este monorepo agrupa los componentes necesarios para validar el regreso de Gedeon Esport como comunidad y futura operación de torneos.

La arquitectura está diseñada para una fase temprana de validación:
- rápida de construir
- clara de operar
- fácil de extender
- sin sobreingeniería

## 2. Objetivo de negocio de esta fase

No construir aún la plataforma completa de torneos.

Sí construir:
- una web pública informativa
- un canal de captación de interés
- una experiencia inicial de comunidad
- un dashboard admin básico
- una base técnica que permita crecer si la validación resulta positiva

## 3. Apps principales

### apps/web
Responsable de la experiencia pública y del panel admin ligero.

Funciones:
- landing page
- roadmap público
- CTA a Discord
- formulario de interés
- dashboard admin básico
- feedback visual del proyecto

### apps/api
Responsable de centralizar datos y lógica futura.

Funciones:
- recepción de leads
- intereses y preferencias
- integración con Discord
- estadísticas de validación
- futura fuente de verdad del sistema

### apps/discord-bot
Responsable de comunidad y automatización ligera en Discord.

Funciones:
- bienvenida
- roles
- interés
- check-in liviano
- notificaciones
- puente con API

## 4. Packages

### packages/contracts
Tipos, enums, payloads y contratos compartidos entre web, bot y API.

### packages/config
Constantes compartidas, features flags y presets básicos.

### packages/ui
Opcional. Componentes compartidos si la UI crece.

## 5. Fuente de verdad

En esta arquitectura:
- la web no es fuente de verdad
- el bot no es fuente de verdad
- la API será la futura fuente de verdad

Durante el mockup, se permite data simulada en frontend.
Cuando se conecte backend, toda persistencia debe pasar por API.

## 6. Integraciones futuras

- Sentinel Board como backoffice operacional
- amon_agents como capa de desarrollo asistido y gobernanza
- BracketFlow como motor futuro de torneos

## 7. Filosofía técnica

- monorepo simple
- modularidad por app
- contratos claros
- frontend rápido de iterar
- backend limpio y escalable
- validación antes de complejidad

## 8. Decisión clave

En esta fase, se prioriza:
1. feedback real
2. registros reales
3. interés comunitario
4. claridad de propuesta

Sobre:
- automatización avanzada
- sistema completo de torneo
- integraciones pesadas
- IA compleja