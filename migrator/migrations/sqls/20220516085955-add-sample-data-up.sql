ALTER TABLE users
ALTER COLUMN "updated_at"
SET DEFAULT now();
ALTER TABLE events
ALTER COLUMN "updated_at"
SET DEFAULT now();
ALTER TABLE events
ADD COLUMN bride_name text;
ALTER TABLE events
ADD COLUMN groom_name text;
INSERT INTO users(id, username, password)
VALUES (1, 'BOOT', '1234');
INSERT INTO venues(id, name, location)
VALUES (1, 'linearb', 'Yigal Alon 82, Tel Aviv');
ALTER TABLE events drop column time;
ALTER TABLE events
ADD COLUMN time TIME;
INSERT INTO events(
    venue_id,
    owner_id,
    season,
    guests,
    bride_name,
    groom_name,
    date,
    time
  )
VALUES (
    1,
    1,
    'Summer',
    200,
    'idit',
    'ido',
    '2022-05-16',
    '19:30:00'
  );