import os
from twilio.rest import Client
from app.services.database import db
import psycopg2
import psycopg2.extras

cursor = db.get_cursor()
dict_cursor = db.get_dict_cursor()


def get_groom_and_bride_names(event_id):
    """
    Get the groom and bride names from DB:
    params: event_id - int
    return: bride_name - string
            groom_name - string
    """

    cursor.execute(
        'SELECT "bride_name" ,"groom_name" FROM events where id=(%s);',
        (event_id,),
    )
    names = cursor.fetchall()
    bride_name = names[0][0]
    groom_name = names[0][1]

    return bride_name, groom_name


def send_sms(guests_to_send, id_of_invitation_row, event_id):
    """
    Send invitation sms to all guests from the list , and update "invited" to true in gusts row in DB
    params: guests_to_send - list with rows of guests  from DB
            id_of_invitation_row - id of initation  row from DB  - int
            event_id - id of event row from DB  - int
    """

    # Connect to twilio account:
    # Your Account SID from twilio.com/console
    account_sid = os.environ.get(
        "TWILIO_ACCOUNT_SID", "ACd17a6132e87b087bf44e16647120bcef"
    )

    # Your Auth Token from twilio.com/console
    auth_token = os.environ.get(
        "TWILIO_AUTH_TOKEN", "44ec4df36849090a1ba9d6a02c27fdae"
    )

    client = Client(account_sid, auth_token)

    # Get the groom and bride names from DB:
    bride_name, groom_name = get_groom_and_bride_names(event_id)

    # Send sms to guests from the list and update "invited" to true :
    for guest in guests_to_send:
        phone_number = str(guest[6])
        message = client.messages.create(
            # to="+972532777866",
            to=phone_number,
            from_="+19803855196",
            body=f"You are invited to celebrate the marriage of {groom_name} and {bride_name}  \n  http://localhost:3000/invitations/{id_of_invitation_row}?guest_id={guest[0]}",
        )
        guest_id = int(guest[0])

        if message.status == "queued":
            cursor.execute(
                'UPDATE guests SET "invited"=TRUE where id=(%s);',
                (guest_id,),
            )


def get_guests_to_send(guests, event_id):
    """
    If no guests ids in guests (empty array) - return rows from all guests,
    else get the list with rows of guests that has been passed .
    perems: guests  -
            event_id - int
    return: guests_to_send - list with rows of gusts to send to then invitations (from DB).
    """
    if guests == []:
        cursor.execute(
            "SELECT * FROM guests where event_id=(%s);",
            (event_id,),
        )
        guests_to_send = cursor.fetchall()
    else:
        str_guests = [(str(x) if isinstance(x, int) else "-1") for x in guests]
        guest_ids = ", ".join(str_guests)
        cursor.execute("SELECT * FROM guests where id IN (%s);" % (guest_ids,))
        guests_to_send = cursor.fetchall()

    return guests_to_send


def send_invatations(event_id, req_json):

    guests_to_send = []

    # Get params from the body:
    title = str(req_json["title"])
    sub_title = str(req_json["sub-title"])
    img_url = str(req_json["image_url"])
    status = str("send")
    guests = req_json["guests"]

    # get rows from db with all guests to send :
    guests_to_send = get_guests_to_send(guests, event_id)

    # update invatation if exist invitation for this event , else insert new:
    cursor.execute(
        'UPDATE invitations SET "title"=%s ,"sub-title"=%s, "image_url"=%s,"status"=%s WHERE "event_id"=%s returning *;',
        (title, sub_title, img_url, status, event_id),
    )
    invitation_row = cursor.fetchone()

    if not invitation_row:
        cursor.execute(
            'INSERT INTO invitations ("title" ,"sub-title", "image_url","event_id","status") VALUES (%s, %s, %s,%s,%s) returning *;',
            (title, sub_title, img_url, event_id, status),
        )
        invitation_row = cursor.fetchone()

    id_of_invitation_row = invitation_row[0]

    # Send sms:
    send_sms(guests_to_send, id_of_invitation_row, event_id)

    # response json with invitation row from DB:
    query = 'SELECT * FROM invitations  WHERE "id"=%s ;'
    psycopg2.extras.execute_values(
        dict_cursor, query, str(id_of_invitation_row)
    )
    invitation_row_json = dict_cursor.fetchone()

    return invitation_row_json
