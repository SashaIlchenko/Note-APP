import { Notes } from "../data/notes";
import { renderList } from "./renderList";
import { notesList } from "./renderList";
export let addedNotes = JSON.parse(sessionStorage.getItem('addedNotes')) || []
let notes = [...Notes, ...addedNotes]
const deleteBtnAll = document.querySelector('.deleteBtnAll');
notesList.addEventListener('click', onBtnDeleteClick)

deleteBtnAll.addEventListener('click', onDeleteAll)
function onBtnDeleteClick(e) {
    const noteItem = e.target;
    if (noteItem.nodeName !== "svg" && noteItem.nodeName !== "path") {
        return
    } else if (noteItem.id === "delete") {
        onDelete(noteItem);
    }
    notesList.innerHTML = '';
    renderList(notes);
}

function onDeleteAll(e) {
    notesList.innerHTML = '';
}
export function onDelete(item) {
    const deletedItem = item.getAttribute('data');
    const itemIndex = notes.findIndex(item => item.id === deletedItem);
    if (itemIndex !== -1) {
        notes.splice(itemIndex, 1);
        sessionStorage.clear("addedNotes")
    } else {
        alert("Item not found.");
    }
}