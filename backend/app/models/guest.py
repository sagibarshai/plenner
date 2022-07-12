from sys import int_info
from xmlrpc.client import boolean
from pydantic import BaseModel
from typing import List, Dict


class Guest(BaseModel):
    extra_guests: int
    attending: int


class GuestsList(BaseModel):
    guest_list: List[Dict]
