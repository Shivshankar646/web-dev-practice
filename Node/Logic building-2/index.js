
let notes = [
  { id: 1, title: "first" },
  { id: 2, title: "second" },
  { id: 3, title: "third" }
];


function updateNoteById(notes, id, newTitle) {
   return notes.map(note =>{
    if (note.id === id) {
        return {...note,title:newTitle}
    }
    return note;
   })
 
}

console.log(updateNoteById(notes,2,"updated second"));


let bhai = [
    {id:1,content:"shiv is bro 1"},
    {id:2,content:"shiv is bro 2"},
    {id:3,content:"shiv is bro 3"},
    {id:4,content:"shiv is bro 4"}
];

function updatedbhai(bhai,newid,newcontent){
  
    return [
        ...bhai,
        {id:newid,content:newcontent}
    ];
}

console.log(updatedbhai(bhai,7,"this is you original bhai"));

let bhai = [
    {id:1,content:"shiv is bro 1"},
    {id:2,content:"shiv is bro 2"},
    {id:3,content:"shiv is bro 3"},
    {id:4,content:"shiv is bro 4"}
];

function updatedbhai(bhai,newid,newcontent){
  
   bhai.push({id:newid,content:newcontent});
   return bhai;
}

console.log(updatedbhai(bhai,7,"this is you original bhai"))

