import { Notes } from "../data/notes";
import { renderList, notesList } from "./renderList";
import { renderArchiveList } from "./renderArhiveList";
let archivedNotes = [];

const archiveBtn = document.querySelectorAll('.archiveBtn');
const showArchiveBtn = document.querySelector('.showArhiveBtn');
const unArchiveBtn = document.querySelectorAll('.unArchiveBtn');

showArchiveBtn.addEventListener('click', onShownBtnClick)
archiveBtn.forEach(button => {
    button.addEventListener('click', onBtnArchiveClick)
    console.log(button)
});
unArchiveBtn.forEach(button => {
    button.addEventListener('click', onBtnUnarchiveClick)
    console.log(button)
});
function archiveNote(index) {
    const archivedNote = Notes.splice(index, 1)[0];
    archivedNotes.push(archivedNote);
    notesList.innerHTML = '';
    renderList(Notes)
}
function onBtnArchiveClick(e) {
    const noteItem = e.currentTarget;
    const archivedItem = noteItem.getAttribute('data');
    const itemIndex = Notes.findIndex(item => item.id === archivedItem);
    if (itemIndex !== -1) {
        archiveNote(itemIndex)
    } else {
        alert("Item not found.")
    }
}

function onShownBtnClick() {
    renderArchiveList(archivedNotes)
}
function unArchiveNote(index) {
    const unarchivedNote = archivedNotes.splice(index, 1)[0];
    Notes.push(unarchivedNote);
    notesList.innerHTML = '';
    renderList(Notes)
}
function onBtnUnarchiveClick() {
    const noteItem = e.currentTarget;
    const archivedItem = noteItem.getAttribute('data');
    const itemIndex = archivedNotes.findIndex(item => item.id === archivedItem);
    if (itemIndex !== -1) {
        unArchiveNote(itemIndex)
    } else {
        alert("Item not found.")
    }
}

