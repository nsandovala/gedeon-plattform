"""Pydantic schemas for the interest API.

These mirror the Zod schemas in @gedeon/contracts:
  - leadInterestInputSchema  → InterestInput
  - leadInterestSuccessSchema → InterestSuccess
"""

from datetime import datetime
from uuid import UUID

from pydantic import BaseModel, EmailStr, Field


# ── Request ──
class InterestInput(BaseModel):
    """POST /api/interest — payload from the web form.

    JSON keys match the Zod leadInterestInputSchema from @gedeon/contracts.
    """

    name: str = Field(..., min_length=2, max_length=80)
    discord_handle: str = Field(..., min_length=2, max_length=40, alias="discord")
    email: EmailStr | None = None
    preferred_mode: str = Field(
        ...,
        min_length=1,
        max_length=30,
        alias="preferredMode",
    )
    availability: str = Field(..., min_length=1, max_length=30)
    message: str | None = Field(None, max_length=500)
    source: str = Field(default="web", max_length=30)

    model_config = {"populate_by_name": True}


# ── Response ──
class InterestSuccess(BaseModel):
    """POST /api/interest — success response."""

    ok: bool = True
    message: str = "Interés registrado correctamente"
    reference_id: UUID | None = None


class InterestOutput(BaseModel):
    """GET /api/interest — single record output."""

    id: UUID
    name: str
    discord_handle: str
    email: str | None
    preferred_mode: str
    availability: str
    message: str | None
    source: str
    created_at: datetime

    model_config = {"from_attributes": True}


class InterestList(BaseModel):
    """GET /api/interest — list response."""

    items: list[InterestOutput]
    total: int
