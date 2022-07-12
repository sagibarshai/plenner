import psycopg2
import psycopg2.extras
import os

DB_PASS = os.environ["POSTGRES_PASSWORD"]
DB_USER = os.environ["POSTGRES_USER"]
DEFAULT_DB = os.environ["POSTGRES_DB"]
DB_HOST = os.environ["POSTGRES_HOST"]


class Database:
    connection = None

    def __init__(self):
        conn = psycopg2.connect(
            dbname=DEFAULT_DB, user=DB_USER, password=DB_PASS, host=DB_HOST
        )
        conn.autocommit = True
        self.connection = conn
        self.connection.autocommit = True

    def get_cursor(self):
        return self.connection.cursor()

    def get_dict_cursor(self):
        return self.connection.cursor(cursor_factory=psycopg2.extras.RealDictCursor)

db = Database()
