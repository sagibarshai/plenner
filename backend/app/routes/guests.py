from fastapi import Request, APIRouter
from app.services.guests import (
    get_all_guests,
    update_guest,
    delete_guest,
    post_user_query,
)
from app.models.guest import Guest, GuestsList

guests_router = APIRouter(prefix="/guests")


@guests_router.get("")
def get_guests(request: Request):
    event_id = request.headers.get("event_id")
    user_id = request.headers.get("user_id")
    return get_all_guests(event_id, user_id)


@guests_router.post("")
def post_guests(guest_list: GuestsList, request: Request):
    user_id_header = request.headers.get("user_id")
    event_id_header = request.headers.get("event_id")
    return post_user_query(
        guest_list.guest_list, user_id_header, event_id_header
    )


@guests_router.put("/{id}")
def update_guests(guest: Guest, id: int):
    return update_guest(guest, id)


@guests_router.delete("/{id}")
def delete_guests(id: int):
    return delete_guest(id)
