-- Add automatic timestamps for your row inserts
-- Use the 'timestamp with time zone' type so you can convert as necessary (e.g. to local time, UTC time, etc.)
CREATE TABLE my_table (
  ... -- Your other columns
  created_at timestamp with time zone DEFAULT current_timestamp,
)
