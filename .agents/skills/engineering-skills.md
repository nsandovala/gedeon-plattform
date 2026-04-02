# Engineering Skills

## General principles
- preferir claridad sobre magia
- no mezclar lógica de negocio en capas de presentación
- respetar límites entre apps
- mantener tipado consistente
- escribir código fácil de cambiar

## Web
- usar Next.js App Router
- preferir componentes pequeños y reutilizables
- separar UI de data fetching
- usar mocks claros mientras no exista backend real

## API
- usar FastAPI con módulos claros
- no meter lógica compleja en rutas
- usar service layer
- mantener schemas explícitos
- preparar persistencia para PostgreSQL

## Discord Bot
- usar discord.js con comandos mínimos
- el bot no decide negocio crítico
- todo evento relevante debe poder enviarse a la API

## Contracts
- centralizar tipos compartidos
- evitar duplicación entre front y bot
- mantener nombres consistentes

## Quality
- no crear archivos innecesarios
- no agregar dependencias sin motivo
- no generar features completas fuera del scope pedido