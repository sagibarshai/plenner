from app.services.database import *
import collections
from fastapi import HTTPException


class seat_arrangement:
    def __init__(self, event_id):
        self.event_id = event_id
        self.venue_id = 0
        self.tables = {}
        self.guests = {}
        self.groups = {}

    # SQL CALLS
    def get_guest_data(self):
        dict_cursor = db.get_dict_cursor()
        request_SQL = " SELECT * FROM guests WHERE event_id = %s ;"
        params = [self.event_id]
        psycopg2.extras.execute_values(dict_cursor, request_SQL, params)
        try:
            rows = dict_cursor.fetchall()
            ans1 = []
            for row in rows:
                ans1.append(dict(row))
            self.guests = ans1
        except Exception as err:
            HTTPException(status_code=500, detail=err)

    def get_table_data(self):
        # geting venue id by the event id
        self.venue_id = get_venue_id(self.event_id)
        request_SQL = """SELECT tables.id,tables.seats, tables.shape,venue_tables.id AS venue_table_id 
            FROM tables INNER JOIN venue_tables
            ON tables.id = venue_tables.table_id 
            WHERE venue_tables.venue_id = %s ;"""
        dict_cursor = db.get_dict_cursor()
        params = [str(self.venue_id)]
        psycopg2.extras.execute_values(dict_cursor, request_SQL, params)
        try:
            rows = dict_cursor.fetchall()
            temp_list_tables = []
            for row in rows:
                row = dict(row)
                row["guests"] = []
                row["available_seats"] = row["seats"]
                temp_list_tables.append(row)
            self.tables = temp_list_tables
        except Exception as err:
            HTTPException(status_code=500, detail=err)

    # SEATING ALGORITHM
    def create_seating_arrangement(self):
        # Divide guests into groups
        group_list = self.get_groups_from_guests()
        self.groups = self.divide_guests_to_groups(group_list)
        # Sort groups by the max number of +1 in the groups' guest list
        group_list = sorted(
            group_list,
            key=lambda i: self.max_attending_guest(self.groups[i]),
            reverse=True,
        )
        # assign tables to groups and assign seats to groups' guests
        for group in group_list:
            self.sort_tables()
            self.assign_tables_to_group(self.groups[group])
            self.assign_best_table(self.groups[group])

        # Assign seats to guests who don't fit withing the current arrangement
        self.assign_table_to_left_overs(group_list)

    def assign_table_to_left_overs(self, group_list):
        for group in group_list:
            self.sort_tables()
            for i, guest in enumerate(self.groups[group]["guests"]):
                self.assign_seat_to_guest(
                    self.groups[group], i, guest, self.tables[0]
                )

    def assign_best_table(self, group):
        # skip tableless groups
        if group["tables"] == []:
            return

        # sort group guests in decending order
        group["guests"] = sorted(
            group["guests"],
            key=lambda a: a["attending"],
            reverse=True,
        )

        # starting from largest guest in list, sit the guests
        for i, guest in enumerate(group["guests"]):
            best_table = group["tables"][
                self.best_table(guest["attending"], group["tables"])
            ]
            if best_table["available_seats"] >= guest["attending"]:
                self.assign_seat_to_guest(group, i, guest, best_table)

        for table in group["tables"]:
            self.tables.append(table)

    def assign_seat_to_guest(self, group, guest_index, guest, table):
        table["guests"].append(guest)
        table["available_seats"] -= guest["attending"]
        group["guests"].pop(guest_index)

    def assign_tables_to_group(self, current_group):
        sits_required = current_group["attending"]

        while sits_required > 0 and self.tables:
            best_table = self.tables[
                self.best_table(sits_required, self.tables)
            ]
            sits_required -= best_table["available_seats"]
            current_group["tables"].append(best_table)

            # delete table from list
            self.tables = [
                table
                for table in self.tables
                if table["venue_table_id"] != best_table["venue_table_id"]
            ]

    def get_best_group_match(self, group):
        best_match = None
        for relation, score in self.relation.items():
            if best_match is None and relation != group:
                best_match = relation
            # if this group is "closer" relatively to from the best group
            if abs(self.relation[relation] - self.relation[group]) < abs(
                self.relation[best_match] - self.relation[group]
                and relation != group
            ):
                best_match = relation
        return best_match

    def divide_guests_to_groups(self, group_list):
        groups = {}

        # create group template, could not figure out how to place them simultaniusly
        # hours of coding wasted on trying: 2
        for group in group_list:
            groups[group] = {
                "name": group,
                "attending": 0,
                "guests": [],
                "tables": [],
            }

        # place guests in groups
        for i, guest in enumerate(self.guests):
            current_guest_group = groups[f"{guest['side']}'s {guest['group']}"]
            current_guest_group["attending"] += guest["attending"]
            current_guest_group["guests"].append(self.guests[i])

        self.guests.clear()
        return groups

    def get_groups_from_guests(self):
        groups = set()
        # get groups from guests
        for guest in self.guests:
            groups.add(f"{guest['side']}'s {guest['group']}")

        return groups

    def best_table(self, required_sits, table_list):
        best_table = 0
        for i, table in enumerate(table_list):
            if best_table < 0:
                if table["available_seats"] <= required_sits:
                    best_table = i
            if (  # table has closer number of sits to that of the group
                0
                <= table["available_seats"] - required_sits
                < table_list[best_table]["available_seats"] - required_sits
            ):
                best_table = i

        if best_table >= 0:
            return best_table
        else:
            return 0

    # HELPER FUNCTIONS
    def get_number_of_attending(self):  # (in venue)
        return self.attending_in_list(self.guests)

    def attending_in_list(self, list):
        attending = 0
        for guest in list:
            attending += guest["attending"]
        return attending

    def sort_tables(self):  # by decresing order of free seats
        self.tables = sorted(
            self.tables,
            key=lambda i: i["available_seats"],
            reverse=True,
        )

    def max_attending_guest(self, group):
        max_extras = 0
        for guest in group["guests"]:
            if guest["attending"] > max_extras:
                max_extras = guest["attending"]
        return max_extras

    def insert_table_arragement(self):
        # enter all the guest to dict with their seating arrangement
        guests_seating_arrangement = []
        for table in self.tables:
            for guest in table["guests"]:
                guests_seating_dict = collections.OrderedDict()
                guests_seating_dict["event_id"] = self.event_id
                guests_seating_dict["venue_table_id"] = table["venue_table_id"]
                guests_seating_dict["guest_id"] = guest["id"]
                guests_seating_arrangement.append(guests_seating_dict)

        # insert to table: seating_arrangement every user that not already in table
        try:
            database = Database()
            cursor = database.get_cursor()
            cursor.executemany(
                """INSERT INTO seating_arrangement(event_id, venue_table_id, guest_id) VALUES (%(event_id)s, %(venue_table_id)s ,  %(guest_id)s) returning * ;""",
                guests_seating_arrangement,
            )
            return {"response_json": self.tables}
        except Exception as err:
            HTTPException(status_code=500, detail=err)


def delete_seating_arrangement(event_id):
    cursor = db.get_cursor()
    query = "DELETE FROM seating_arrangement WHERE event_id = %s ;"
    param = event_id
    try:
        cursor.execute(query, param)
        return f"deleted all recorads where event_id =  {event_id}"
    except Exception as err:
        HTTPException(status_code=500, detail=err)


def get_seats_taken_status(event_id):
    cursor = db.get_cursor()
    venue_id = get_venue_id(event_id)
    request_SQL = """SELECT SUM(tables.seats) 
        FROM tables INNER JOIN venue_tables 
        ON tables.id = venue_tables.table_id
        WHERE venue_tables.venue_id = %s ;"""
    try:
        cursor.execute(request_SQL, str(venue_id))
        total_seats = cursor.fetchone()
        # get venue_id
        total_seats = total_seats[0]
    except Exception as err:
        HTTPException(status_code=500, detail=err)

    request_SQL = """SELECT SUM(DISTINCT guests.attending)
        FROM guests INNER JOIN seating_arrangement
        ON guests.id = seating_arrangement.guest_id
        WHERE seating_arrangement.event_id = %s; """

    try:
        cursor.execute(request_SQL, str(venue_id))
        total_attending = cursor.fetchone()
        total_attending = total_attending[0]
    except Exception as err:
        HTTPException(status_code=500, detail=err)

    seats_status = {"total_seats": total_seats, "taken_seats": total_attending}
    return seats_status


# TO - change
def get_seating_arrange(event_id):
    venue_id = get_venue_id(event_id)
    request_SQL = """SELECT seating_arrangement.guest_id , guests.full_name , guests.attending , seating_arrangement.venue_table_id
        FROM seating_arrangement 
        INNER JOIN guests ON guests.id = seating_arrangement.guest_id
        WHERE seating_arrangement.event_id = %s ;"""
    dict_cursor = db.get_dict_cursor()
    params = [str(venue_id)]
    psycopg2.extras.execute_values(dict_cursor, request_SQL, params)
    venue_tables_sql = """SELECT * FROM venue_tables JOIN tables on venue_tables.table_id = tables.id  WHERE venue_id = %s ;"""
    temp_list_tables = []
    try:
        rows = dict_cursor.fetchall()
        for row in rows:
            temp_list_tables.append(dict(row))
    except Exception as err:
        HTTPException(status_code=500, detail=err)
    dict_cursor = db.get_dict_cursor()
    params = [str(venue_id)]
    psycopg2.extras.execute_values(dict_cursor, venue_tables_sql, params)
    tables = []
    try:
        rows = dict_cursor.fetchall()
        for row in rows:
            tables.append(dict(row))
    except Exception as err:
        HTTPException(status_code=500, detail=err)
    return {"seating_arrangement": temp_list_tables, "tables": tables}


def get_venue_id(event_id):
    cursor = db.get_cursor()
    # get venue_id by event_id
    request_SQL = " SELECT venue_id FROM events WHERE events.id = %s ;"
    try:
        cursor.execute(request_SQL, str(event_id))
        venue_id_temp = cursor.fetchone()
        # get venue_id
        venue_id = venue_id_temp[0]
        return venue_id
    except Exception as err:
        HTTPException(status_code=500, detail=err)


def main_arrangment_seats(event_id):
    # delete all old arrangement
    delete_seating_arrangement(event_id)
    # arrange seats from the start
    test = seat_arrangement(event_id)
    test.get_table_data()
    test.get_guest_data()
    test.create_seating_arrangement()
    return test.insert_table_arragement()
