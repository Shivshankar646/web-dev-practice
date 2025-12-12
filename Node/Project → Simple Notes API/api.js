const express =require('express');
const app =express();
const port =3000;
const connectDB = require('./db');
connectDB();

const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Note = mongoose.model('Note', noteSchema);


app.use(express.json());



app.get('/notes', async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
});


app.post('/notes', async (req, res) => {
    const { title, content } = req.body;

    const newNote = new Note({ title, content });
    await newNote.save();

    res.status(201).json({ message: "Note Added", newNote });
});


app.put('/notes/:id', async (req, res) => {
    const updatedNote = await Note.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json({ message: "Note Updated here", updatedNote });
});


app.delete('/notes/:id', async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: "Note Deleted here" });
});


app.listen(port,()=>{
console.log(`server is runnig on http://localhost:${port}`)
});