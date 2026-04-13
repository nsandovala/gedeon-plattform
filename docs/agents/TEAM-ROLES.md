# Team Roles

## Propósito

Definir claramente qué rol cumple cada agente o herramienta dentro de Gedeon Platform para evitar superposición, pérdida de foco o trabajo duplicado.

Este documento es humano. No reemplaza manifests ni skills, pero ayuda a entender el ecosistema de trabajo.

---

## Founder / Integrador

### Rol
Responsable de la visión, dirección final, criterio de producto y continuidad entre sesiones.

### Responsabilidades
- decidir prioridades
- validar avances
- mantener la coherencia entre marca, arquitectura y roadmap
- integrar aportes de múltiples agentes
- detener desviaciones de scope

### Riesgos a evitar
- abrir demasiados frentes
- aceptar features por impulso
- depender del recuerdo en vez del contexto escrito

---

## GPT / Claude — Architect / CTO Layer

### Rol
Capa de pensamiento estructural y de alto nivel.

### Responsabilidades
- arquitectura
- decisiones técnicas
- diseño de fases
- organización de agentes
- revisión de scope
- definición de memoria compartida
- alineación producto + tecnología

### Debe evitar
- bajar a implementación detallada innecesaria si aún no toca
- empujar features futuras fuera de fase

---

## Frontend Dev Agent

### Rol
Construcción de la web pública y paneles visuales.

### Responsabilidades
- Home pública
- secciones visuales
- formularios
- narrativa visual
- coherencia con `brand-guide.md` y `visual-system.md`

### Debe evitar
- inventar backend
- alterar la dirección de marca sin brief
- meter lógica de negocio en UI

---

## Backend Dev Agent

### Rol
Construcción de API, modelos, servicios y fuente de verdad.

### Responsabilidades
- FastAPI
- PostgreSQL
- modelos de datos
- endpoints
- schemas
- base para persistencia real

### Debe evitar
- usar Firestore como base principal
- meter OCR / IA / automatización avanzada ahora
- sobreingenierizar

---

## Discord Dev Agent

### Rol
Construcción del bot como capa de comunidad y automatización ligera.

### Responsabilidades
- estructura del bot
- comandos MVP
- eventos básicos
- integración futura con API

### Debe evitar
- guardar lógica de negocio crítica en Discord
- hacer del bot una fuente de verdad paralela
- crecer más rápido que la validación del proyecto

---

## Qwen / Gemma / Modelos locales

### Rol
Copilotos de implementación y aceleración.

### Responsabilidades
- scaffolds
- iteraciones rápidas
- propuestas técnicas
- apoyo frontend o bot
- resumir estado si leen el contexto correcto

### Debe evitarse usarlos como
- criterio final de arquitectura
- fuente única de verdad
- memoria del proyecto

### Regla
Deben leer primero:
- `CONTEXT.md`
- `DECISIONS.md`
- `ROADMAP.md`
- `TASKBOARD.md`

---

## Antigravity Agent

### Rol
Agente in-context útil para construir bloques rápidos dentro del repo.

### Bueno para
- UI
- layouts
- iteraciones visuales
- scaffolds controlados
- cambios acotados

### Riesgos
- quedarse en “correcto” y no en “preciso”
- expandir scope si el prompt es ambiguo
- generar código bonito pero sin criterio de producto

---

## OpenCode / CLI agents

### Rol
Soporte backend, scripts, estructura e implementación técnica más seca.

### Bueno para
- backend
- scripts
- organización técnica
- tareas estructurales
- refactors acotados

---

## Regla general de equipo

Todos los agentes pueden producir.

Pero la coherencia del proyecto depende de:
- contexto compartido
- decisiones documentadas
- fases claras
- handoffs limpios
- criterio final del founder

---

## Frase guía

No estamos construyendo con “muchos agentes”.

Estamos construyendo con:
- una sola visión
- múltiples manos
- una memoria compartida