import { Notes } from "../data/notes";
import { renderList, notesList } from "./renderList";
import { renderArchiveList } from "./renderArhiveList";
import { renderSummaryTable } from "./summaryTable";
import { addedNotes } from "./deleteNote";
let archivedNotes = [];
let notes = [...Notes, ...addedNotes]

const showArchiveBtn = document.querySelector('.showArhiveBtn');
const archiveTable = document.querySelector('.archiveTable');
showArchiveBtn.addEventListener('click', onShownBtnClick)
notesList.addEventListener('click', onBtnArchiveClick)
archiveTable.addEventListener('click', onBtnUnarchiveClick)

function archiveNote(index) {
    const archivedNote = notes.splice(index, 1)[0];
    archivedNotes.push(archivedNote);
    notesList.innerHTML = '';
    renderList(notes)
    renderSummaryTable(archivedNotes, notes)
}
function onBtnArchiveClick(e) {
    const noteItem = e.target;
    if (noteItem.nodeName !== "svg" && noteItem.nodeName !== "path") {
        return
    }
    else if (noteItem.id === "archive") {
        const archivedItem = noteItem.parentElement.getAttribute('data');
        const itemIndex = notes.findIndex(item => item.id === archivedItem);
        if (itemIndex !== -1) {
            archiveNote(itemIndex)
        } else {
            alert("Item not found.")
        }
        renderArchiveList(archivedNotes)
    }
}
function onShownBtnClick() {
    archiveTable.classList.remove('is-hidden')
    renderArchiveList(archivedNotes)

}
function unArchiveNote(index) {
    const [unarchivedNote] = archivedNotes.splice(index, 1);

    notes.push(unarchivedNote);
    notesList.innerHTML = '';

    renderList(notes)
    renderSummaryTable(archivedNotes, notes)
    renderArchiveList(archivedNotes);

}
function onBtnUnarchiveClick(e) {
    const noteItem = e.target;
    if (noteItem.nodeName !== "svg" && noteItem.nodeName !== "path") {
        return
    }
    else if (noteItem.id === "archive") {
        onArchive(noteItem)
    }
}

function onArchive(item) {
    const archivedItem = item.parentElement.parentElement.getAttribute('data');
    const itemIndex = archivedNotes.findIndex(item => item.id === archivedItem);
    if (itemIndex !== -1) {
        unArchiveNote(itemIndex)
    } else {
        alert("Item not found.")
    }
}

