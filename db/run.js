
const notesService = require("../services/notes.service");

async function run() {
  // CREATE (Business Logic in action)
  const newNote = await notesService.createNote(
    "Second Note",
    "Created via business logic layer"
  );

  console.log("CREATED:", newNote);

  // READ (via business logic)
  const notes = await notesService.getNotes();

  console.log("ALL NOTES:", notes);
}

run();