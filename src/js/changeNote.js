import { renderList, notesList } from "./renderList";
import { Notes } from "../data/notes";
import { backdgop, modalNotes } from "./modalChangeNote";
import { addedNotes } from "./deleteNote";
const form = document.querySelector('.changeForm');
let notes = [...Notes, ...addedNotes]
form.addEventListener('submit', changeNotes);
const currentDate = new Date();

function changeNotes(e) {
    e.preventDefault();
    const selectedOption = document.querySelector('input[name="option"]:checked');
    const itemId = JSON.parse(localStorage.getItem('selected'))
    const itemIndex = notes.findIndex(item => item.id === itemId);
    if (itemIndex !== -1) {
        notes[itemIndex].Name = form[0].value.trim();
        notes[itemIndex].Content = form[4].value.trim();
        notes[itemIndex].Category = selectedOption.value;
        notes[itemIndex].Dates = currentDate.toISOString();
    } else {
        alert("Item not found.");
    }
    notesList.innerHTML = '';
    renderList(notes)
    modalNotes.classList.add('is-hidden')
    backdgop.classList.add('is-hidden')
    this.reset();

}
