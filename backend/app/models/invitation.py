from multiprocessing import Event
from pydantic import BaseModel

class Invitation(BaseModel):
    id: int
    title: str
    image_url: str
    status: str
    sub_title: str
    event: int