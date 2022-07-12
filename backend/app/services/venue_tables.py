from fastapi import HTTPException
from app.services.database import db

dict_cursor = db.get_dict_cursor()
cursor = db.get_cursor()


def get_all_tables_venue(event_id):
    # get venue_id by event_id
    request_SQL = " SELECT venue_id FROM events WHERE events.id = %s ;"
    try:
        cursor.execute(request_SQL, str(event_id))
        venue_id_temp = cursor.fetchone()
        # get venue_id
        venue_id = venue_id_temp[0]
    except Exception as err:
        HTTPException(status_code=500, detail=err)

    # get all tables by venue_id

    request_SQL = """SELECT tables.id,tables.seats, tables.shape
        FROM tables INNER JOIN venue_tables
        ON tables.id = venue_tables.table_id
        WHERE venue_tables.venue_id = %s ;"""
    try:
        dict_cursor.execute(request_SQL, str(venue_id))
        rows = dict_cursor.fetchall()
        tables = []
        for row in rows:
            tables.append(dict(row))
        return tables
    except Exception as err:
        HTTPException(status_code=500, detail=err)
    pass


def add_table(event_id):
    # get venue_id by event_id
    request_SQL = " SELECT venue_id FROM events WHERE events.id = %s ;"
    try:
        cursor.execute(request_SQL, str(event_id))
        venue_id_temp = cursor.fetchone()
        # get venue_id
        venue_id = venue_id_temp[0]
    except Exception as err:
        HTTPException(status_code=500, detail=err)
