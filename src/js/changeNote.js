import { renderList } from "./renderList";

const form = document.querySelector('.changeForm');

form.addEventListener('submit', changeNotes);
const notes = JSON.parse(localStorage.getItem('notes'))
function changeNotes(e) {
    e.preventDefault();
    const selectedOption = document.querySelector('input[name="option"]:checked');
    const itemId = JSON.parse(localStorage.getItem('selected'))
    const itemIndex = notes.findIndex(item => item.id === itemId);
    console.log(itemIndex)
    if (itemIndex !== -1) {
        notes[itemIndex].Name = form[0].value.trim();
        notes[itemIndex].Content = form[4].value.trim();
        notes[itemIndex].Category = selectedOption.value;
        notes[itemIndex].Dates = form[5].value.trim();
    } else {
        alert("Item not found.");
    }
    renderList(notes)
}