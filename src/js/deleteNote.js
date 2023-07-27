import { Notes } from "../data/notes";
import { renderList } from "./renderList";
import { notesList } from "./renderList";
const deleteButton = document.querySelectorAll('.deleteBtn');
const deleteBtnAll = document.querySelector('.deleteBtnAll');

deleteButton.forEach(button => {
    button.addEventListener('click', onBtnDeleteClick)
});
deleteBtnAll.addEventListener('click', onDeleteAll)
function onBtnDeleteClick(e) {
    // const notes = JSON.parse(localStorage.getItem('notes'))
    const noteItem = e.currentTarget;
    console.log(e)
    const deletedItem = noteItem.getAttribute('data');
    const itemIndex = Notes.findIndex(item => item.id === deletedItem);
    if (itemIndex !== -1) {
        Notes.splice(itemIndex, 1);
        // localStorage.setItem('notes', JSON.stringify(notes))
    } else {
        alert("Item not found.");
    }
    notesList.innerHTML = '';
    renderList(Notes);
}

function onDeleteAll(e) {
    notesList.innerHTML = '';
    console.log(e)
}