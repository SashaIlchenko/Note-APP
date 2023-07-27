import { Notes } from "../data/notes";
import { renderList } from "./renderList";
import { notesList } from "./renderList";
let notes = [...Notes]

const deleteBtnAll = document.querySelector('.deleteBtnAll');
notesList.addEventListener('click', onBtnDeleteClick)

deleteBtnAll.addEventListener('click', onDeleteAll)
function onBtnDeleteClick(e) {
    const noteItem = e.target;
    console.log(e)
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
    console.log(e)
}
export function onDelete(item) {
    const deletedItem = item.parentElement.getAttribute('data');
    const itemIndex = notes.findIndex(item => item.id === deletedItem);
    if (itemIndex !== -1) {
        notes.splice(itemIndex, 1);
    } else {
        alert("Item not found.");
    }
}