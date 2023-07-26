import { renderList } from "./renderList";
const deletesButton = document.querySelectorAll('.deleteBtn');
deletesButton.forEach(button => {
    ('click', onBtnDeleteClick)
    button.addEventListener('click', onBtnDeleteClick)
});

function onBtnDeleteClick(e) {
    const notes = JSON.parse(localStorage.getItem('notes'))
    const noteItem = e.currentTarget;
    console.log(e)
    const deletedItem = noteItem.getAttribute('data');
    const itemIndex = notes.findIndex(item => item.id === deletedItem);
    if (itemIndex !== -1) {
        notes.splice(itemIndex, 1);
        localStorage.setItem('notes', JSON.stringify(notes))
    } else {
        alert("Item not found.");
    }
    renderList(notes);
}