ALTER TABLE invitations
RENAME COLUMN "free_text" TO "title";

ALTER TABLE invitations
ADD COLUMN "sub-title" text;
