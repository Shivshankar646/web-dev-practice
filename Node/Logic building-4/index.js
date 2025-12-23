let notes = [
  { bhai:"Shiv",id: 1, title: "first" },
  { id: 2, title: "second" }
];

function getNotes(notes) {
return notes;
};


function createNote(notes, title) {
const newnote ={id:notes.length + 1,title};
return [newnote,...notes]
};


function updateNote(notes, id, newTitle) {
return notes.map(note => note.id === id ? {...note,id,newTitle} : note)
};
console.log(updateNote(notes,1,"i am god in coding and i know it"))

function deleteNote(notes, id) {
return notes.filter(note => note.id !== id);
};


//today is my logic is upgraded