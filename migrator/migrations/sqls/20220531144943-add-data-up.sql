/* Replace with your SQL commands */
/* Add invitation */
INSERT INTO invitations(
        event_id,
        title,
        image_url,
        "status",
        "sub-title"
    )
VALUES (
        1,
        'Save the date',
        'https://media.nbcnewyork.com/2022/01/lady-gaga-getty-tlmd.jpg',
        'Active',
        'Join us in celebration of the marriage of:'
    );
/* Add  Tables */
INSERT INTO tables(id, seats, shape)
VALUES(1, 10, 'circle');
INSERT INTO tables(id, seats, shape)
VALUES(2, 16, 'square');
/* Add  venue Tables */
INSERT INTO venue_tables(venue_id, table_id)
VALUES(1, 1);
INSERT INTO venue_tables(venue_id, table_id)
VALUES(1, 1);
INSERT INTO venue_tables(venue_id, table_id)
VALUES(1, 1);
INSERT INTO venue_tables(venue_id, table_id)
VALUES(1, 1);
INSERT INTO venue_tables(venue_id, table_id)
VALUES(1, 2);
INSERT INTO venue_tables(venue_id, table_id)
VALUES(1, 2);
INSERT INTO venue_tables(venue_id, table_id)
VALUES(1, 2);