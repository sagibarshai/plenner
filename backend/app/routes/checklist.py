from fastapi import Request, APIRouter
from app.services.checklist import (
    add_to_checklist,
    get_checklist_by_id,
    update_checklist,
    delete_checklist_by_id,
)
from app.models.checklist import Checklist, ChecklistBody

checklist_router = APIRouter(prefix="/checklist")


@checklist_router.get("")
def get_checklist(request: Request):
    event_id = request.headers.get("event_id")
    return get_checklist_by_id(event_id)


@checklist_router.post("")
def post_checklist(
    checklist_body: Checklist,
    request: Request
):
    event_id = request.headers.get("event_id")
    return add_to_checklist(checklist_body, event_id)


@checklist_router.put("/{id}")
def put_checklist(
    ChecklistBody: ChecklistBody,
    id: int,
):
    return update_checklist(ChecklistBody, id)


@checklist_router.delete("/{id}")
def delete_checklist(id: int):
    return delete_checklist_by_id(id)
