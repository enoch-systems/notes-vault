const pool = require("../db/client");

/**
 * BUSINESS LOGIC LAYER
 * Rules before touching storage
 */

async function getNotes() {
  const result = await pool.query(`
    SELECT * FROM notes
    ORDER BY created_at DESC;
  `);

  return result.rows;
}

async function createNote(title, content) {
  // BUSINESS RULE: prevent empty data
  if (!title || !content) {
    throw new Error("Title and content are required");
  }

  const result = await pool.query(
    `INSERT INTO notes (title, content)
     VALUES ($1, $2)
     RETURNING *`,
    [title, content]
  );

  return result.rows[0];
}

module.exports = {
  getNotes,
  createNote,
};