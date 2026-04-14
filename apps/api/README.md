# Gedeon API

FastAPI backend for the Gedeon platform.

## Stack

- Python 3.12+
- FastAPI
- SQLAlchemy 2.0 (async) + asyncpg
- PostgreSQL
- Alembic (prepared for migrations)

## Structure

```
api/
├── app/
│   ├── __init__.py
│   ├── main.py            # FastAPI app factory — wires routes + CORS
│   ├── config.py           # Pydantic Settings from .env
│   ├── db.py               # Engine, async session, Base, get_db()
│   ├── models/
│   │   ├── __init__.py     # Model registry (Alembic discovers here)
│   │   └── interest.py     # InterestSubmission table
│   ├── schemas/
│   │   ├── __init__.py     # Pydantic barrel
│   │   └── interest.py     # InterestInput, InterestSuccess, InterestOutput
│   ├── routes/
│   │   ├── __init__.py     # Routes barrel
│   │   ├── health.py       # GET /health
│   │   └── interest.py     # POST + GET /api/interest
│   └── services/           # Business logic (future)
│       └── __init__.py
├── alembic/                # DB migrations (future — run `alembic init`)
├── requirements.txt
├── .env.example
└── README.md
```

## Quick start

### 1. Start PostgreSQL

```bash
docker compose up -d
```

PostgreSQL will be available at `localhost:5432` with credentials `gedeon:gedeon`.

### 2. Install dependencies

```bash
cd apps/api
python -m venv .venv
source .venv/bin/activate   # or `.venv\Scripts\activate` on Windows
pip install -r requirements.txt
```

### 3. Create the database tables

No Alembic migrations yet. For now, run once:

```python
# One-liner to create all tables from models
python -c "
import asyncio
from app.db import engine, Base

async def create():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

asyncio.run(create())
"
```

### 4. Run the API

```bash
uvicorn app.main:app --reload --port 8000
```

### 5. Test

```bash
# Health
curl http://localhost:8000/health

# Submit interest
curl -X POST http://localhost:8000/api/interest \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "discord": "testuser#1234",
    "email": "test@example.com",
    "preferredMode": "competitive",
    "availability": "weekend",
    "message": "Excited to join Gedeon!"
  }'

# List submissions
curl http://localhost:8000/api/interest
```

Swagger docs: http://localhost:8000/docs

## Environment variables

Copy `.env.example` to `.env`:

```
DATABASE_URL=postgresql+asyncpg://gedeon:gedeon@localhost:5432/gedeon
ALLOWED_ORIGINS=http://localhost:3000
DEBUG=false
```

## API Routes

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/health` | System health check |
| `POST` | `/api/interest` | Submit a new lead (from web form) |
| `GET` | `/api/interest` | List all leads (admin) |

## Contract alignment

The Pydantic `InterestInput` schema mirrors the Zod `leadInterestInputSchema`
in `@gedeon/contracts`. The field mapping:

| Zod field (contracts) | Pydantic field (api) |
|---|---|
| `name` | `name` |
| `discord` | `discord_handle` (aliased) |
| `email` | `email` |
| `preferredMode` | `preferred_mode` |
| `availability` | `availability` |
| `message` | `message` |

The DB model `InterestSubmission` adds `id`, `source`, and `created_at`.

## Next steps

- [ ] Alembic init + first migration
- [ ] Table creation on startup in dev mode
- [ ] Add `GET /api/interest/:id`
- [ ] Rate limiting on POST
- [ ] Services layer for business logic
