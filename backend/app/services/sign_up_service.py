import psycopg2
import psycopg2.extras
from app.services.database import db


cursor = db.get_cursor()
dict_cursor = db.get_dict_cursor()


def get_venue_id(address, location):
    #   check if location exist  in venue table (with the same name)
    #   if  exist  : get the venue_id
    #   else : create new venue row  ,  and return its  venue_id
    cursor.execute("SELECT id FROM venues WHERE name=(%s);", (location,))
    venue_id = cursor.fetchone()

    if not venue_id:
        cursor.execute(
            'INSERT INTO venues ("name" ,"location") VALUES (%s, %s) returning *;',
            (
                location,
                address,
            ),
        )
        venue_id = cursor.fetchone()

    return venue_id[0]


def save_user(username, password, full_name):
    #  create new user and  get  user_id as owner_id
    cursor.execute(
        'INSERT INTO users ("username","password","full_name") VALUES (%s, %s, %s) returning *;',
        (
            username,
            password,
            full_name,
        ),
    )

    owner_id = (cursor.fetchone())[0]
    return owner_id


def insert_into_event_table(values_event_table_query):
    # create new event row in DB
    cursor.execute(
        'INSERT INTO events ("owner_id","bride_name","groom_name","date","time","season","guests","venue_id") VALUES (%s,%s,%s,%s,%s,%s,%s,%s) returning *;',
        values_event_table_query,
    )
    event_id = (cursor.fetchone())[0]
    return event_id


def sign_up_servece(req_json):
    """
    SIGN UP POST API - save user and event params .

    POST BODY PARAMS :
            username - string
            password - string
            full_name - string
            bride_name - string
            groom_name -string
            date - string  , format :
            time - string  , format :
            address - string (location adrress)
            location - string (location name)
            season - string
            guests - int - number of guests

    RETURNS: json with  event_id and  user_id

    """

    # Get params from the body:
    username = str(req_json["username"])
    password = str(req_json["password"])
    full_name = str(req_json["full_name"])
    address = str(req_json["address"])
    location = str(req_json["location"])
    bride_name = str(req_json["bride_name"])
    groom_name = str(req_json["groom_name"])
    date = str(req_json["date"])
    time = str(req_json["time"])
    season = str(req_json["season"])
    guests = str(req_json["guests"])


    venue_id = get_venue_id(address, location)

    owner_id = save_user(username, password, full_name)

    values_event_table_query = (
        str(owner_id),
        bride_name,
        groom_name,
        date,
        time,
        season,
        guests,
        str(venue_id),
    )

    event_id = insert_into_event_table(values_event_table_query)

    return {"event_id": event_id, "owner_id": owner_id}
