from pydantic import BaseModel

class Event(BaseModel):
    venue_id: int
    owner_id: int
    season: str
    guests: int
    date: str
    bride_name: str
    groom_name: str
    time: str