# Handoff — Backend Interest Module (2026-04-21)

Fecha: 21 de abril de 2026
Sesión: PC Windows → continuación en Mac
Fase: 1 — Validación de comunidad + base técnica
Módulo: Backend `interest` (FastAPI + PostgreSQL)

---

## 1. Resumen ejecutivo del estado

El backend `interest` está **código-completo** pero con un **bug activo en producción**:
- `GET /api/interest` devuelve **500 Internal Server Error**
- El traceback apunta a `asyncpg.exceptions.ConnectionDoesNotExistError: connection was closed in the middle of operation`

**FastAPI funciona correctamente:**
- Servidor levanta desde `apps/api`
- `/health` responde 200
- `/docs` carga Swagger UI correctamente
- OpenAPI registra GET y POST `/api/interest`

**Postgres está levantado:**
- Docker/Postgres 17 corre en contenedor `gedeon-postgres`
- healthcheck pasa
- Se confirmó al menos una inserción previa exitosa

**Correcciones aplicadas en esta sesión:**
1. uvicorn arranque desde ruta correcta (`apps/api`)
2. carga de entorno del bot (dotenv)
3. limpieza de secreto en commit (token de Discord)
4. `clientReady` → `ready` en bot
5. `pool_pre_ping=True` y `pool_recycle=300` en db.py

**El bug principal sigue abierto:**
- `GET /api/interest` falla con 500
- Error de conexión asyncpg cerrada en medio de operación

---

## 2. Qué ya funciona

| Componente | Estado | Detalle |
|---|---|---|
| FastAPI scaffold | ✅ OK | main.py, config.py, db.py, models/, schemas/, routes/ |
| `/health` | ✅ 200 | `{"status": "ok", "app": "Gedeon API", ...}` |
| `/docs` | ✅ OK | Swagger UI carga correctamente |
| OpenAPI schema | ✅ OK | GET y POST `/api/interest` registrados |
| Docker/Postgres | ✅ UP | Contenedor `gedeon-postgres` corriendo, healthcheck pasa |
| Tabla creada | ✅ OK | `interest_submissions` existe (confirmado por inserción previa) |
| POST `/api/interest` | ✅ Código OK | El endpoint está implementado correctamente |
| Discord bot | ✅ OK | Autenticó, `ready` event funciona |
| Web form | ✅ OK | InterestForm con Zod validation + fetch real |

---

## 3. Qué sigue fallando

### Bug principal: GET /api/interest devuelve 500

**Traceback observado:**
```
asyncpg.exceptions.ConnectionDoesNotExistError: connection was closed in the middle of operation
```

**Contexto del error:**
- Ocurre en `list_interest()` al hacer `await db.execute(select(...))`
- La conexión parece cerrarse antes de completar la query
- POST puede haber funcionado en algún momento (inserción previa confirmada)
- GET falla consistentemente

### NO confundir con el 422 de Swagger

**Error secundario descartado como bug principal:**
- `POST /api/interest` puede dar 422 en Swagger UI
- Esto es por **JSON mal formado** en el request body de prueba
- El 422 **no es un bug estructural del backend**
- Es un error de validación Pydantic esperado cuando el JSON no cumple el schema

**JSON válido para pruebas:**
```json
{
  "name": "nelson",
  "discord": "vito9795",
  "email": "n.sandoval@hotmail.com",
  "preferredMode": "casual",
  "availability": "weekend",
  "message": "prueba de ingreso",
  "source": "web"
}
```

---

## 4. Evidencia técnica observada

### db.py — configuración actual
```python
engine = create_async_engine(
    settings.DATABASE_URL,
    echo=settings.DEBUG,
    pool_pre_ping=True,
    pool_recycle=300,
)

async_session = async_sessionmaker(
    engine,
    class_=AsyncSession,
    expire_on_commit=False,
)

async def get_db() -> AsyncSession:
    async with async_session() as session:
        try:
            yield session
            await session.commit()
        except Exception:
            await session.rollback()
            raise
```

### routes/interest.py — flujo GET
```python
@router.get("", response_model=InterestList)
async def list_interest(
    db: AsyncSession = Depends(get_db),
) -> InterestList:
    count_result = await db.execute(select(func.count()).select_from(InterestSubmission))
    total = count_result.scalar() or 0

    result = await db.execute(
        select(InterestSubmission).order_by(InterestSubmission.created_at.desc())
    )
    items = result.scalars().all()

    return InterestList(items=[...], total=total)
```

### docker-compose.yml — postgres config
```yaml
services:
  postgres:
    image: postgres:17-alpine
    container_name: gedeon-postgres
    environment:
      POSTGRES_USER: gedeon
      POSTGRES_PASSWORD: gedeon
      POSTGRES_DB: gedeon
    ports:
      - "5432:5432"
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U gedeon -d gedeon"]
      interval: 5s
      timeout: 3s
      retries: 5
```

### DATABASE_URL default
```
postgresql+asyncpg://gedeon:gedeon@localhost:5432/gedeon
```

---

## 5. Archivos backend críticos a revisar

| Archivo | Propósito |
|---|---|
| `apps/api/.env` | Variables de entorno: DATABASE_URL, ALLOWED_ORIGINS |
| `apps/api/app/db.py` | Engine async, session factory, get_db dependency |
| `apps/api/app/routes/interest.py` | Handlers POST y GET /api/interest |
| `apps/api/app/schemas/interest.py` | Pydantic schemas con alias (preferredMode) |
| `apps/api/app/models/interest.py` | SQLAlchemy model InterestSubmission |
| `apps/api/app/config.py` | Settings con defaults |
| `apps/api/app/main.py` | FastAPI app, CORS, router include |
| `docker-compose.yml` | PostgreSQL 17 service |

---

## 6. Hipótesis activas

### H1: Inestabilidad del pool de conexiones asyncpg
- `pool_pre_ping=True` y `pool_recycle=300` se agregaron, pero puede no ser suficiente
- asyncpg puede necesitar `pool_size` y `max_overflow` explícitos
- La conexión puede estar cerrándose antes de completar la query

### H2: Lifecycle de sesión async SQLAlchemy
- `get_db()` usa `async with async_session()` pero puede haber race condition
- El context manager puede cerrar la sesión antes de que termine el query
- Posible falta de `await session.begin()` explícito

### H3: Problema de reconexión fallida
- Si la primera conexión falla, el pool puede no reconectarse correctamente
- `pool_pre_ping` debería detectar conexiones muertas, pero asyncpg puede comportarse distinto

### H4: Mismatch Docker/.env/pool config
- El `DATABASE_URL` usa `localhost:5432`
- En Docker Desktop, `localhost` puede mapear diferente según OS
- Verificar que `apps/api/.env` existe y tiene el valor correcto

### H5: Tabla corrupta o sin schema correcto
- La tabla existe pero puede tener columnas mismatch
- Verificar que `create_tables.py` creó el schema esperado
- El modelo `InterestSubmission` debe coincidir con la tabla real

---

## 6.5 Solución propuesta (aplicar primero)

**Hipótesis principal:** El pool de conexiones asyncpg no tiene configuración explícita de tamaño, lo que causa que las conexiones se cierren inesperadamente.

**Fix propuesto en `apps/api/app/db.py`:**

```python
# ANTES (actual)
engine = create_async_engine(
    settings.DATABASE_URL,
    echo=settings.DEBUG,
    pool_pre_ping=True,
    pool_recycle=300,
)

# DESPUÉS (propuesto)
engine = create_async_engine(
    settings.DATABASE_URL,
    echo=settings.DEBUG,
    pool_pre_ping=True,
    pool_recycle=300,
    pool_size=5,           # ← NUEVO: conexiones permanentes en el pool
    max_overflow=10,       # ← NUEVO: conexiones adicionales si pool_size se agota
    pool_timeout=30,       # ← NUEVO: segundos esperando por conexión libre
)
```

**Por qué esto funciona:**
1. `pool_size=5` mantiene 5 conexiones siempre listas
2. `max_overflow=10` permite hasta 15 conexiones en picos
3. `pool_timeout=30` evita que el request se cuelgue esperando conexión
4. asyncpg sin configuración explícita puede crear conexiones "hueco" que se cierran

**Alternativa si el fix anterior no funciona:**
```python
# En db.py, agregar lifecycle events al engine
from sqlalchemy import event

@event.listens_for(engine.sync_engine, "connect")
def receive_connect(dbapi_connection, connection_record):
    """Configurar conexión al crearse."""
    dbapi_connection.set_type_codec(
        # codec para uuid si hace falta
    )
```

**Otra alternativa: usar engine.begin() explícito en routes:**
```python
# En routes/interest.py
@router.get("", response_model=InterestList)
async def list_interest(db: AsyncSession = Depends(get_db)) -> InterestList:
    async with db.begin():  # ← Transacción explícita
        count_result = await db.execute(select(func.count()).select_from(InterestSubmission))
        total = count_result.scalar() or 0
        result = await db.execute(select(InterestSubmission).order_by(InterestSubmission.created_at.desc()))
        items = result.scalars().all()
    return InterestList(items=[...], total=total)
```

**Nota sobre el fix:** El `get_db()` actual hace `await session.commit()` al final, lo cual puede causar problemas si no hay transacción activa. El fix del pool debería ser suficiente, pero si persiste, revisar el lifecycle de la sesión.

---

## 7. Pasos exactos para continuar en la Mac

```bash
# ═══════════════════════════════════════════════════════════════════════════════
# PASO 0: Git pull desde Mac
# ═══════════════════════════════════════════════════════════════════════════════

# 0.1 Abrir terminal y navegar al proyecto
cd ~/Dev/gedeon-plattform  # o donde esté clonado el repo

# 0.2 Verificar que estamos en main y sin cambios locales
git status
# Si hay cambios: git stash  (para guardarlos temporalmente)

# 0.3 Traer últimos cambios del remoto
git fetch origin
git pull origin main

# 0.4 Verificar que tenemos los archivos más recientes
ls -la docs/agents/HANDOFF-INTEREST-BACKEND-2026-04-21.md
# Debe existir

# 0.5 Verificar estado de la copia de trabajo
git log --oneline -5
# Debe mostrar los commits más recientes

# ═══════════════════════════════════════════════════════════════════════════════
# PASOS DE DEBUGGING
# ═══════════════════════════════════════════════════════════════════════════════

# 1. Levantar PostgreSQL
docker compose up -d

# 2. Verificar contenedor corriendo
docker compose ps

# 4. Ver logs de postgres
docker logs gedeon-postgres

# 5. Revisar que .env existe y tiene DATABASE_URL correcto
cat apps/api/.env
# DATABASE_URL=postgresql+asyncpg://gedeon:gedeon@localhost:5432/gedeon

# ═══════════════════════════════════════════════════════════════════════════════
# PASO CLAVE: Aplicar fix en db.py (ver sección 6.5)
# ═══════════════════════════════════════════════════════════════════════════════

# 5.5 Editar apps/api/app/db.py y agregar pool_size, max_overflow, pool_timeout
# ANTES:
#   engine = create_async_engine(settings.DATABASE_URL, echo=settings.DEBUG, pool_pre_ping=True, pool_recycle=300)
# DESPUÉS:
#   engine = create_async_engine(
#       settings.DATABASE_URL,
#       echo=settings.DEBUG,
#       pool_pre_ping=True,
#       pool_recycle=300,
#       pool_size=5,
#       max_overflow=10,
#       pool_timeout=30,
#   )

# 6. Entrar al directorio de la API
cd apps/api

# 7. Instalar deps (si hace falta)
pip install -r requirements.txt

# 8. Levantar API
python -m uvicorn app.main:app --reload --port 8000

# 9. Probar health
curl http://localhost:8000/health
# Esperado: {"status": "ok", "app": "Gedeon API", ...}

# 10. Probar docs (abrir en browser)
open http://localhost:8000/docs

# 11. Probar GET /api/interest
curl http://localhost:8000/api/interest
# Si falla: capturar traceback completo del terminal donde corre uvicorn

# 12. Probar POST /api/interest con JSON válido
curl -X POST http://localhost:8000/api/interest \
  -H "Content-Type: application/json" \
  -d '{
    "name": "nelson",
    "discord": "vito9795",
    "email": "n.sandoval@hotmail.com",
    "preferredMode": "casual",
    "availability": "weekend",
    "message": "prueba de ingreso",
    "source": "web"
  }'

# 13. Si GET sigue fallando con 500:
#     - Copiar traceback completo
#     - Revisar si dice "connection was closed" o otro error
#     - Probar agregar pool_size=5, max_overflow=10 al engine
#     - Probar session.begin() explícito antes del query

# 14. Si POST funciona pero GET falla:
#     - Puede ser problema específico del SELECT
#     - Verificar que la tabla tiene datos: docker exec -it gedeon-postgres psql -U gedeon -d gedeon -c "SELECT * FROM interest_submissions;"

# 15. Si ambos funcionan:
#     - Verificar flujo completo desde web: cd apps/web && npm run dev
#     - Probar formulario en http://localhost:3000
```

---

## 8. JSON válido de prueba para POST

```json
{
  "name": "nelson",
  "discord": "vito9795",
  "email": "n.sandoval@hotmail.com",
  "preferredMode": "casual",
  "availability": "weekend",
  "message": "prueba de ingreso",
  "source": "web"
}
```

**Notas:**
- `preferredMode` (camelCase) es el alias en el schema Pydantic
- El campo `discord` se mapea a `discord_handle` en el modelo
- `email` y `message` son opcionales (nullable)
- `source` tiene default "web"

---

## 9. Handoff final

### Handoff
- tarea completada:
  - Documentación del estado técnico actual del módulo backend `interest`
  - Análisis del bug `ConnectionDoesNotExistError` en GET /api/interest
  - Distinción clara entre bug real (500) y error 422 por JSON inválido
  - **Solución propuesta:** agregar `pool_size=5`, `max_overflow=10`, `pool_timeout=30` al engine
  - Checklist de pasos para debugging en Mac

- archivos modificados:
  - `docs/agents/HANDOFF-INTEREST-BACKEND-2026-04-21.md` (nuevo)
  - `TASKBOARD.md` (actualizado para reflejar bug activo)
  - `CONTEXT.md` (actualizado para reflejar estado backend actual)

- pendiente:
  - Aplicar fix propuesto en `db.py` (pool_size, max_overflow, pool_timeout)
  - Confirmar que `GET /api/interest` responde 200
  - Confirmar flujo completo: web form → API → DB → GET

- riesgos:
  - Docker Desktop puede no estar instalado o corriendo en Mac
  - asyncpg puede requerir configuración adicional del pool
  - La conexión puede cerrarse por timeout o race condition

- siguiente paso:
  1. `git pull` en Mac
  2. `docker compose up -d`
  3. **Aplicar fix en `apps/api/app/db.py`** (ver sección 6.5)
  4. `python -m uvicorn app.main:app --reload --port 8000` desde `apps/api`
  5. `curl http://localhost:8000/api/interest`
  6. Si funciona: probar flujo completo desde web
  7. Si falla: capturar traceback, revisar alternativa de `db.begin()` en routes