let notes = JSON.parse(localStorage.getItem("notes")) || [];

showDisplay();
renderNotes();
function showDisplay() {
  document.getElementById("app").innerHTML = /*HTML*/ `
    <h1>Notater</h1>

    <div class="input-area">
      <input
        type="text"
        id="noteInput"
        onkeydown="if(event.key === 'Enter') addNote(this)"
        placeholder="Skriv et notat..."
        autofocus
      />
    </div>

    <ul id="notesList"></ul>
    `;
}

function addNote(input) {
  if (input.value.trim() === "") return;
  notes.push(input.value);
  localStorage.setItem("notes", JSON.stringify(notes));
  input.value = "";
  renderNotes();
}

function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  renderNotes();
}

function renderNotes() {
  document.getElementById("notesList").innerHTML = notes
    .map(
      (note, index) => /*HTML*/ `
    <li>
        ${note}
        <button onclick="deleteNote(${index})">❌</button>
    </li>
    `,
    )
    .join("");
}
