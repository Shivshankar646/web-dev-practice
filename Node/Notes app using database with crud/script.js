const API = "http://localhost:3000/notes";
let editId = null;

// LOAD NOTES
async function loadNotes() {
  const res = await fetch(API);
  const notes = await res.json();

  const ul = document.getElementById("notes");
  ul.innerHTML = "";

  notes.forEach(note => {
    const li = document.createElement("li");

    li.innerHTML = `
      ${note.title} - ${note.content}
      <button onclick="editNote('${note._id}', '${note.title}', '${note.content}')">Edit</button>
      <button onclick="deleteNote('${note._id}')" >Delete</button>
    `;
  console.log(note._id)
    ul.appendChild(li);
  });
}

// ADD NOTE
async function addNote() {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content })
  });

  loadNotes();
}

// WHEN CLICK EDIT
function editNote(id, title, content) {
  editId = id;
  console.log(editId)
  document.getElementById("editTitle").value = title;
  document.getElementById("editContent").value = content;
}

// UPDATE NOTE
async function updateNote() {
  const title = document.getElementById("editTitle").value;
  const content = document.getElementById("editContent").value;

  await fetch(`${API}/${editId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content })
  });

  editId = null;
  loadNotes();
}

async function deleteNote(id) {
    await fetch(`${API}/${id}`,{
        method:"DELETE"
    });
    loadNotes();
}
// LOAD ON PAGE OPEN
loadNotes();

