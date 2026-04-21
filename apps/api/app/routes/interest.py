"""Interest API routes.

POST /api/interest  — submit a new lead
GET  /api/interest  — list all submissions (admin)
"""

from fastapi import APIRouter, Depends
from sqlalchemy import func, select
from sqlalchemy.ext.asyncio import AsyncSession

from app.db import get_db
from app.models.interest import InterestSubmission
from app.schemas.interest import InterestInput, InterestSuccess, InterestList, InterestOutput

router = APIRouter(prefix="/api/interest", tags=["interest"])


@router.post("", response_model=InterestSuccess, status_code=201)
async def create_interest(
    payload: InterestInput,
    db: AsyncSession = Depends(get_db),
) -> InterestSuccess:
    """Register a new interest submission from the web form."""

    record = InterestSubmission(
        name=payload.name,
        discord_handle=payload.discord_handle,
        email=payload.email,
        preferred_mode=payload.preferred_mode,
        availability=payload.availability,
        message=payload.message,
        source=payload.source,
    )

    db.add(record)
    await db.flush()

    return InterestSuccess(reference_id=record.id)


@router.get("", response_model=InterestList)
async def list_interest(
    db: AsyncSession = Depends(get_db),
) -> InterestList:
    """List all interest submissions — admin use."""

    count_result = await db.execute(select(func.count()).select_from(InterestSubmission))
    total = count_result.scalar() or 0

    result = await db.execute(
        select(InterestSubmission).order_by(InterestSubmission.created_at.desc())
    )
    items = result.scalars().all()

    return InterestList(
        items=[
            InterestOutput(
                id=r.id,
                name=r.name,
                discord_handle=r.discord_handle,
                email=r.email,
                preferred_mode=r.preferred_mode,
                availability=r.availability,
                message=r.message,
                source=r.source,
                created_at=r.created_at,
            )
            for r in items
        ],
        total=total,
    )
