import psycopg2
import psycopg2.extras
from app.services.database import db
from fastapi import Request
from app.models.guest import GuestsList

dict_cursor = db.get_dict_cursor()


def remove_double_id(items: list):
    items_without_id = items.copy()
    for item in items_without_id:
        del item["id"]
    return items_without_id


def get_invitation_by_id(event_id):
    query = """ 
	SELECT 
		events.*, 
		invitations.*, 
		invitations.id AS invitation_id,
		venues.*,
		venues.id AS venue_id,
		venues.name AS venue_name
	FROM 	
		events 
	JOIN 
		invitations using(id) 
	JOIN
		venues
	ON 
		events.id=invitations.event_id 
	WHERE 
		events.id=%s
	"""
    psycopg2.extras.execute_values(dict_cursor, query, event_id)
    result = dict_cursor.fetchall()
    updated_res = remove_double_id(result)
    return updated_res[0]
