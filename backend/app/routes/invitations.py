from fastapi import Request, APIRouter
from app.services.database import db
from app.services.sms_service import send_invatations
from app.services.invitations import get_invitation_by_id


cursor = db.get_cursor()
invitations_router = APIRouter(prefix="/invitations")


@invitations_router.get("/{event_id}")
def get_invitation(request: Request):
    event_id = request.headers.get("event_id")
    return get_invitation_by_id(event_id)


@invitations_router.post("/send")
async def send_sms_to_guests(request: Request):
    """
    POST API TO SEND INVITATIONS BY SMS to list of guests (if list is empty=[]
            - send invitations to all guests of this event ),
             update invitation in DB (insert new invitation if not  exist
             for this event ,else update),
             update host

    POST BODY PARAMS:
      "title" -string,
      "sub-title" - string,
      "image_url" -string,
      "guests" - list of guests id (ints) ,if empy=[] - send to all .

    HEADERS PARM :
        "event_id" - int

    RESPONSE: 
        json with invitation row from DB

    """
    event_id = int(request.headers.get("event_id"))
    req_json = await request.json()
    invitation_row_json = send_invatations(event_id,req_json)
    return invitation_row_json
