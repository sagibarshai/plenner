from fastapi import HTTPException, Request, APIRouter

from app.services.venue_tables import *

venue_tables_router = APIRouter(prefix="/venue_tables")


@venue_tables_router.get("")
def get_guests(request: Request):
    event_id = request.headers.get("event_id")
    event_id = event_id.strip()
    if event_id is None or event_id == "":
        raise HTTPException(status_code=400, detail="Invalid input")
    return get_all_tables_venue(event_id)
