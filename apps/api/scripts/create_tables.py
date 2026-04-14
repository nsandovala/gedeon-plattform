"""Create all database tables from SQLAlchemy models.

Run this once after starting PostgreSQL to initialize the schema.
After Alembic is set up, this script becomes obsolete.

Usage (from apps/api/ directory):
    python -m scripts.create_tables
"""

import asyncio
import sys

# Ensure the app package is importable
sys.path.insert(0, "..")

from app.db import engine, Base
from app.models import InterestSubmission  # noqa: register models


async def create_all():
    print(f"[create_tables] Connecting to {engine.url} ...")
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    print("[create_tables] Tables created successfully.")
    print("[create_tables] Tables:")
    for table in Base.metadata.sorted_tables:
        print(f"  - {table.name} ({len(table.columns)} columns)")


if __name__ == "__main__":
    asyncio.run(create_all())
