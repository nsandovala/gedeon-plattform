"""SQLAlchemy models.

Each model file represents a database table.
Import new models here so Alembic can discover them.
"""

from app.models.interest import InterestSubmission

__all__ = ["InterestSubmission"]
