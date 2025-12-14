const express =require('express');
const cors = require('cors');
const mongoose =require('mongoose');
const connectdb =require('./db');
const port =3000;


connectdb();

const app =express();

app.use(cors());
app.use(express.json());

const noteSchema = new mongoose.Schema({
  title: String,
  content: String
});

const Note = mongoose.model('Note', noteSchema);


app.get('/notes', async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});


app.post('/notes', async (req, res) => {
    const{title,content} =req.body;
    const newnote =new Note({title,content});
  await newnote.save();
res.status(201).json({message:"note added",newnote});
});

app.put('/notes/:id',async(req,res) =>{
   const updatednote =await Note.findByIdAndUpdate(req.params.id,req.body,{new:true});
   res.json({message:"updated note",updatednote})
});

app.delete('/notes/:id',async(req,res) =>{
await Note.findByIdAndDelete(req.params.id)
res.json({message:"note Deleted"})
});

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
});