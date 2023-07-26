import { Notes } from "../data/notes";
import { renderItem } from "./renderList";

const form = document.querySelector('.addForm')
let notes = [];
form.addEventListener('submit', addNotes)
const currentDate = new Date();
function addNotes(e) {
    e.preventDefault();
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const id = currentDate.getMilliseconds();
        const Name = form[0].value.trim();
        const Content = form[4].value.trim();
        const Category = selectedOption.value;
        const Dates = form[5].value.trim()
        const Created = currentDate.toISOString();
        notes.push([...Notes, { id, Name, Content, Category, Dates, Created }])
        renderItem({ id, Name, Content, Category, Dates, Created })
        localStorage.setItem('notes', JSON.stringify(notes))
    } else {
        alert('Please type all fields')
    }
}
