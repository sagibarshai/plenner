from fastapi import HTTPException, Request, APIRouter

from app.services.seat_arrangement import *

arrange_seats_router = APIRouter(prefix="/arrange_seats")


@arrange_seats_router.get("")
def get_seating_arrangement(request: Request):
    event_id = request.headers.get("event_id")
    check_valid_input(event_id)
    return get_seating_arrange(event_id)


@arrange_seats_router.post("")
def arrange_seats(request: Request):
    event_id = request.headers.get("event_id")
    check_valid_input(event_id)
    return main_arrangment_seats(event_id)


@arrange_seats_router.delete("")
def delete_all_seating_arrangement(request: Request):
    event_id = request.headers.get("event_id")
    check_valid_input(event_id)
    return delete_seating_arrangement(event_id)


@arrange_seats_router.get("/seats_status")
def get_seats_status(request: Request):
    event_id = request.headers.get("event_id")
    check_valid_input(event_id)
    return get_seats_taken_status(event_id)


def check_valid_input(input):
    input = input.strip()
    if input is None or input == "":
        raise HTTPException(status_code=400, detail="Invalid input")
