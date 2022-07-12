from app.services.database import db

cursor = db.get_cursor()
dictCursor = db.get_dict_cursor()


def get_checklist_by_id(event_id):
    query = "SELECT id, title, is_done FROM checklist WHERE event_id = %s;"
    params = event_id
    try:
        dictCursor.execute(query, params)
        return dictCursor.fetchall()
    except Exception as err:
        print("\npsycopg2 ERROR:", err)


def add_to_checklist(checklist, event_id):
    query = "insert into checklist(title, is_done, event_id) values (%s,%s,%s) returning *;"
    params = (checklist.title, checklist.is_done, event_id)
    try:
        cursor.execute(query, params)
        # return ID for new row
        return {"id": cursor.fetchall()[0][0]}
    except Exception as err:
        print("\npsycopg2 ERROR:", err)


def update_checklist(checklist, checklist_id):
    query = "UPDATE checklist SET is_done = %s WHERE id = %s returning *;"
    params = (checklist.is_done, checklist_id)
    try:
        dictCursor.execute(query, params)
        return dictCursor.fetchall()
    except Exception as err:
        print("\npsycopg2 ERROR:", err)


def delete_checklist_by_id(id):
    query = "DELETE FROM checklist WHERE id = %s;"
    params = str(id)
    print(params)
    try:
        cursor.execute(query, (params,))
        return f"The checklist id - {id} was deleted"
    except Exception as err:
        print("\npsycopg2 ERROR:", err)
