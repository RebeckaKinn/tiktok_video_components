/*localStorage er som et lite lager i nettleseren som husker ting
selv om man lukker eller refresher siden. De fjernes når du selv 
manuelt fjerner dem. 
*/
//Hent lagrede notater fra localStorage eller start med tom liste
let notes = JSON.parse(localStorage.getItem("notes")) || [];

//Vis HTML-strukturen når siden lastes
showDisplay();

//Render notatene som allerede ligger lagret
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

//legge til et nytt notat
function addNote(input) {
  //Sjekk at det faktisk er tekst
  if (input.value.trim() === "") return;

  //Legg notatet til i arrayen og legger det til i localStorage
  notes.push(input.value);
  localStorage.setItem("notes", JSON.stringify(notes));
  input.value = "";
  renderNotes();
}

//slette et notat basert på indeks
function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  renderNotes();
}

//lager HTML for alle notatene og setter det i <ul>
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
    .join(""); //Slår sammen alle <li> til en streng
}
