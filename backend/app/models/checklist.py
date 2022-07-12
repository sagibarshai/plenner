from sys import int_info
from xmlrpc.client import boolean
from pydantic import BaseModel


class ChecklistBody(BaseModel):
    is_done: str


class Checklist(ChecklistBody):
    title: str
