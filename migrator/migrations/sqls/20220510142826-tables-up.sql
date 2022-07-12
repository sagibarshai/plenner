/* Users */
CREATE TABLE IF NOT EXISTS users (
    id SERIAL primary key,
    username text,
    password text,
    full_name text,
    created_at TIMESTAMP DEFAULT now() NOT NULL,
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP
);
grant all on users to postgres;
/* venues */
CREATE TABLE IF NOT EXISTS venues (
    id SERIAL primary key,
    name text NOT NULL,
    location text NOT NULL,
    created_at TIMESTAMP DEFAULT now() NOT NULL,
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP
);
grant all on venues to postgres;
/* events */
CREATE TABLE IF NOT EXISTS events (
    id SERIAL primary key,
    venue_id int NOT NULL CONSTRAINT venue_id_fkey REFERENCES venues on delete cascade,
    owner_id int NOT NULL CONSTRAINT owner_id_fkey REFERENCES users on delete cascade,
    season text NOT NULL,
    guests int NOT NULL,
    "date" date NOT NULL,
    "time" date NOT NULL,
    created_at TIMESTAMP DEFAULT now() NOT NULL,
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP
);
grant all on events to postgres;
/* tables */
CREATE TABLE IF NOT EXISTS tables (
    id SERIAL primary key,
    seats int NOT NULL,
    shape text NOT NULL,
    created_at TIMESTAMP DEFAULT now() NOT NULL,
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP
);
grant all on tables to postgres;
/* venue_tables*/
CREATE TABLE IF NOT EXISTS venue_tables (
    id SERIAL primary key,
    venue_id int NOT NULL CONSTRAINT venue_id_fkey REFERENCES venues on delete cascade,
    table_id int NOT NULL CONSTRAINT table_id_fkey REFERENCES tables on delete cascade,
    created_at TIMESTAMP DEFAULT now() NOT NULL,
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP
);
grant all on venue_tables to postgres;
/* guests */
CREATE TABLE IF NOT EXISTS guests (
    id SERIAL primary key,
    full_name text NOT NULL,
    owner_id int NOT NULL CONSTRAINT owner_id_fkey REFERENCES users on delete cascade,
    event_id int NOT NULL CONSTRAINT event_id_fkey REFERENCES events on delete cascade,
    side text NOT NULL,
    "group" text NOT NULL,
    phone_number text NOT NULL,
    invited boolean NOT NULL,
    extra_guests int NOT NULL,
    attending int NOT NULL,
    created_at TIMESTAMP DEFAULT now() NOT NULL,
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP
);
grant all on guests to postgres;
/* seating arrangement*/
CREATE TABLE seating_arrangement (
    event_id int NOT NULL CONSTRAINT event_id_fkey REFERENCES events on delete cascade,
    venue_table_id int NOT NULL CONSTRAINT venue_table_fkey REFERENCES venue_tables on delete cascade,
    guest_id int NOT NULL CONSTRAINT guest_id_fkey REFERENCES guests on delete cascade,
    created_at TIMESTAMP DEFAULT now() NOT NULL,
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP
);
grant all on seating_arrangement to postgres;
/* invitations */
CREATE TABLE invitations (
    id SERIAL primary key,
    event_id int NOT NULL CONSTRAINT event_id_fkey REFERENCES events on delete cascade,
    free_text text,
    image_url text NOT NULL,
    status text NOT NULL,
    created_at TIMESTAMP DEFAULT now() NOT NULL,
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP
);
grant all on invitations to postgres;