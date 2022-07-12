CREATE TABLE IF NOT EXISTS checklist (
    id SERIAL primary key,
    title TEXT NOT NULL,
    is_done BOOLEAN,
    created_at DATE DEFAULT now(),
    updated_at DATE DEFAULT now(),
    deleted_at DATE,
    event_id int REFERENCES events(id)
);