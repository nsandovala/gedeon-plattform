# Agent Workflow

## Objetivo

Definir cómo deben trabajar los agentes dentro de Gedeon Platform para evitar pérdida de contexto, duplicación de esfuerzo, cambios de rumbo innecesarios y decisiones contradictorias.

Este flujo aplica a:
- sesiones nuevas
- iteraciones de diseño
- tareas técnicas
- handoffs entre herramientas o modelos
- trabajo entre founder + agentes

---

## Principio central

**Ningún agente trabaja desde cero.**

Antes de proponer, escribir o modificar algo, debe leer el contexto compartido del proyecto.

## Documentos obligatorios antes de trabajar

Todo agente debe revisar, en este orden:

1. `CONTEXT.md`
2. `docs/adr/DECISIONS.md`
3. `ROADMAP.md`
4. `TASKBOARD.md`

Y luego, según el tipo de tarea:

### Si la tarea es visual o de marca
- `docs/product/brand-guide.md`
- `docs/product/visual-system.md`
- `docs/product/shield-brief.md`

### Si la tarea es de arquitectura
- `docs/architecture/ARCHITECTURE.md`

### Si la tarea es operativa de agentes
- `.agents/skills/*.md`
- `.agents/playbooks/*.md`
- `.agents/manifests/*.yaml`

---

## Flujo estándar de sesión

### Paso 1 — Leer contexto
Antes de actuar, el agente debe resumir:

- qué está construido
- qué fase está activa
- qué se debe hacer ahora
- qué no se debe tocar todavía

### Paso 2 — Confirmar scope
El agente debe trabajar solo sobre el bloque pedido.

Ejemplos:
- solo hero
- solo formulario
- solo contracts
- solo init bot
- solo init api

No debe expandir el scope por entusiasmo.

### Paso 3 — Ejecutar en bloque pequeño
Toda tarea debe producir un cambio:
- verificable
- limitado
- entendible
- reversible

### Paso 4 — Explicar salida
Al terminar, el agente debe dejar claro:
- qué cambió
- por qué cambió
- qué archivos tocó
- qué falta por hacer
- qué no tocó

---

## Reglas por tipo de agente

## 1. Architect
Responsable de:
- arquitectura
- límites de sistema
- decisiones técnicas
- claridad de fases

Debe evitar:
- proponer features fuera de fase
- cambiar stack sin decisión documentada
- expandir complejidad prematuramente

---

## 2. Frontend Dev
Responsable de:
- UI
- experiencia pública
- home
- formularios
- coherencia visual

Debe evitar:
- meter lógica de backend
- cambiar dirección de marca sin brief
- inventar flujos no pedidos
- romper el tono definido en brand docs

---

## 3. Backend Dev
Responsable de:
- FastAPI
- PostgreSQL
- modelos
- endpoints
- servicios

Debe evitar:
- meter Firestore como base principal
- arrancar OCR o automatización avanzada
- crear microservicios prematuros
- poner lógica de dominio en rutas

---

## 4. Discord Dev
Responsable de:
- bot mínimo
- comandos
- estructura base
- eventos
- payloads hacia futura API

Debe evitar:
- guardar lógica crítica solo en el bot
- crear estado oculto fuera de la futura API
- ampliar el bot más allá de la fase actual

---

## 5. Founder / Integrador
Responsable de:
- dirección final
- criterio de producto
- continuidad entre sesiones
- priorización
- validación real del progreso

Debe evitar:
- abrir demasiados frentes al mismo tiempo
- aceptar features fuera del roadmap por impulso
- depender del “recuerdo” en vez del contexto escrito

---

## Handoff entre agentes

Cuando un agente termina una tarea y otro debe continuar, el handoff debe incluir:

1. qué se hizo
2. qué archivos se tocaron
3. qué quedó pendiente
4. riesgos o dudas
5. siguiente paso sugerido

Formato recomendado:

```md
### Handoff
- tarea completada:
- archivos modificados:
- pendiente:
- riesgos:
- siguiente paso: