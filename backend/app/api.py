from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.checklist import checklist_router
from app.routes.invitations import invitations_router
from app.routes.guests import guests_router
from app.routes.venue_tables import venue_tables_router
from app.routes.seating_arrangement import arrange_seats_router
from app.routes.sign_up import sign_up_router

app = FastAPI()
app.include_router(checklist_router)
app.include_router(invitations_router)
app.include_router(guests_router)
app.include_router(venue_tables_router)
app.include_router(arrange_seats_router)
app.include_router(sign_up_router)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def health():
    return "Healthy"
