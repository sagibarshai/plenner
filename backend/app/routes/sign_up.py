from fastapi import Request, APIRouter
from app.services.database import db
from app.services.sign_up_service import sign_up_servece
from fastapi.responses import JSONResponse

sign_up_router = APIRouter(prefix="/sign_up")

@sign_up_router.post("")
async def sign_up(request: Request):
    """
    POST API function to sign-up
        create new event row and new user row in DB .
        if location  does not exist  - create new location
        (in venues table).
    RESPONSE : json with  event_id  and  user_id
    """
    req_json = await request.json()
    ids = sign_up_servece(req_json)

    response = JSONResponse(content=ids)
    response.set_cookie(key="event_id", value=ids["event_id"])
    response.set_cookie(key="owner_id", value=ids["owner_id"])
    return response
