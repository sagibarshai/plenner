ALTER TABLE invitations
RENAME COLUMN  "title" TO  "free_text";

ALTER TABLE invitations
DROP COLUMN "sub-title" ;