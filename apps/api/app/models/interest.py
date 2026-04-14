"""InterestSubmission — stores a lead's interest in Gedeon Esport.

Mirrors the Zod schema in @gedeon/contracts (leadInterestInputSchema).
"""

import uuid
from datetime import datetime, timezone

from sqlalchemy import String, Text, Enum as SAEnum
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import Mapped, mapped_column

from app.db import Base


class InterestSubmission(Base):
    __tablename__ = "interest_submissions"

    id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True),
        primary_key=True,
        default=uuid.uuid4,
    )
    name: Mapped[str] = mapped_column(String(80), nullable=False)
    discord_handle: Mapped[str] = mapped_column(String(40), nullable=False)
    email: Mapped[str | None] = mapped_column(String(255), nullable=True)
    preferred_mode: Mapped[str] = mapped_column(String(30), nullable=False)
    availability: Mapped[str] = mapped_column(String(30), nullable=False)
    message: Mapped[str | None] = mapped_column(Text, nullable=True)
    source: Mapped[str] = mapped_column(String(30), nullable=False, default="web")
    created_at: Mapped[datetime] = mapped_column(
        nullable=False,
        default=lambda: datetime.now(timezone.utc),
    )

    def __repr__(self) -> str:
        return f"<InterestSubmission {self.discord_handle}>"
