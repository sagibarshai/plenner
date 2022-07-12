from app.services.database import db
import psycopg2
import psycopg2.extras

cursor = db.get_cursor()
dict_cursor = db.get_dict_cursor()


def get_all_guests(event_id, user_id):
    query = " SELECT * FROM guests WHERE event_id = %s AND owner_id = %s;"
    params = (event_id, user_id)
    try:
        dict_cursor.execute(query, params)
        return dict_cursor.fetchall()
    except Exception as err:
        print("\npsycopg2 ERROR:", err)


def post_user_query(guest_list, user_id_header, event_id_header):
    guests = []
    for item in guest_list:
        guests.append(
            (
                item["full_name"],
                user_id_header,
                event_id_header,
                item["side"],
                item["phone_number"],
                item["invited"],
                item["extra_guests"],
                item["attending"],
                item["group"],
            )
        )
    psycopg2.extras.execute_values(
        dict_cursor,
        'INSERT INTO guests (full_name, owner_id, event_id, side, phone_number, invited, extra_guests, attending, "group") VALUES %s returning *',
        guests,
    )
    return dict_cursor.fetchall()


def update_guest(guest, id):
    query = "UPDATE guests SET attending = %s WHERE id = %s returning *;"
    attending = guest.extra_guests if guest.attending else 0
    params = (
        attending,
        id,
    )
    try:
        print(params)
        cursor.execute(query, params)
        return 200
    except Exception as err:
        print("\npsycopg2 ERROR:", err)


def delete_guest(id):
    query = "DELETE FROM guests WHERE id = %s;"
    params = str(id)
    try:
        cursor.execute(query, (params,))
        return f"The guest id - {id} was deleted"
    except Exception as err:
        print("\npsycopg2 ERROR:", err)
