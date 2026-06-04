const express = require("express");
const notesService = require("./services/notes.service");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());


/**
 * API LAYER = communication bridge
 */

// GET ALL NOTES
app.get("/notes", async (req, res) => {
  const notes = await notesService.getNotes();
  res.json(notes);
});

// CREATE NOTE
app.post("/notes", async (req, res) => {
  const { title, content } = req.body;

  try {
    const note = await notesService.createNote(title, content);
    res.json(note);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log("API running on http://localhost:3000");
});
