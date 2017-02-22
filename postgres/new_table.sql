CREATE EXTENSION IF NOT EXISTS pgcrypto;

DROP TABLE IF EXISTS my_table;

-- Use Postgres to generate RFC 4122 v4 uuids for your row ids.
-- https://www.postgresql.org/docs/9.6/static/pgcrypto.html
CREATE TABLE my_table (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ... -- your other columns
);
