let notes = [
  { id: 1, title: "first" },
  { id: 2, title: "second" },
  { id: 3, title: "third" }
];


function deletenote(notes,id){
   return notes.filter(note => note.id !== id);
}

notes =deletenote(notes,2)
console.log(notes);