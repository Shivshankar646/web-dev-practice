const Note = require('../models/Note');

// GET all notes
exports.getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
};

// CREATE note
exports.createNote = async (req, res) => {
  const { title, content } = req.body;
  const newNote = new Note({ title, content });
  await newNote.save();
  res.status(201).json(newNote);
};

// UPDATE note
exports.updateNote = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "Invalid note ID" });
  }

  const updatedNote = await Note.findByIdAndUpdate(
    id,
    req.body,
    { new: true }
  );

  if (!updatedNote) {
    return res.status(404).json({ message: "Note not found" });
  }

  res.json(updatedNote);
};


// DELETE note
exports.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: "Note deleted" });
};
