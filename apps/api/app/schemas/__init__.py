"""Pydantic schemas barrel."""

from app.schemas.interest import (
    InterestInput,
    InterestSuccess,
    InterestOutput,
    InterestList,
)

__all__ = ["InterestInput", "InterestSuccess", "InterestOutput", "InterestList"]
