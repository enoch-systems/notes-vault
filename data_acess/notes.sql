-- DATA ACCESS LAYER (NOTES)

-- CREATE NOTE
INSERT INTO notes (title, content)
VALUES ($1, $2);

-- GET ALL NOTES
SELECT * FROM notes
ORDER BY created_at DESC;

-- GET SINGLE NOTE
SELECT * FROM notes
WHERE id = $1;

-- UPDATE NOTE
UPDATE notes
SET title = $2,
    content = $3
WHERE id = $1;

-- DELETE NOTE
DELETE FROM notes
WHERE id = $1;