import { Notes } from "../data/notes";
import { renderItem } from "./renderList";
import { backdgop, modalNotes } from "./modalAddNote";
import { nanoid } from "nanoid";

const form = document.querySelector('.addForm')
// let notes = [...Notes];
let addNotesArr = [];
form.addEventListener('submit', addNotes)
const currentDate = new Date();
function addNotes(e) {
    e.preventDefault();
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const Created = currentDate.toISOString();
        const Name = form[0].value.trim();
        const Category = selectedOption.value;
        const Content = form[4].value.trim();
        const Dates = currentDate.toISOString();
        const id = nanoid();
        addNotesArr.push({ id, Name, Content, Category, Dates, Created })
        localStorage.setItem('addedNotes', JSON.stringify(addNotesArr))
        renderItem({ id, Name, Content, Category, Dates, Created })
        modalNotes.classList.add('is-hidden')
        backdgop.classList.add('is-hidden')

    } else {
        alert('Please type all fields')
    }
    this.reset();
}
