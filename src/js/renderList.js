import { Notes } from "../data/notes";
import dayjs from "dayjs";
export const notesList = document.querySelector('.notesList');
localStorage.setItem('notes', JSON.stringify(Notes))
export function renderList(obj) {
    if (obj.length > 1) {
        const markup = obj
            .map(
                ({
                    id,
                    Created,
                    Name,
                    Category,
                    Content,
                    Dates
                }) => `<li class="noteCard" data="${id}">
<p>${Name}</p><p>${dayjs(Created, 'YYYY-MM-DD')}</p><p>${Category}</p><p>${Content}</p><p>${Dates}
<div id="buttonList"><button type="button" class="changeBtn" data="${id}">Change</button>
<button type="button" class="archiveBtn" data="${id}">Archive</button>
<button type="button" class="deleteBtn" data="${id}">Delete</button></div>
      </li>
`
            )
            .join('');
        notesList.insertAdjacentHTML('afterBegin', markup);

    } else {
        // textError.classList.add('is-active');
        // setTimeout(() => {
        //     textError.classList.remove('is-active');
        // }, 2000);
    }
}
export function renderItem({ id, Name, Content, Category, Dates, Created }) {
    const noteItem = (`<li class="noteCard" data="${id}">
<p>${Name}</p><p>${dayjs(Created, 'YYYY-MM-DD')}</p><p>${Category}</p><p>${Content}</p><p>${Dates}
<div id="buttonList"><button type="button" class="changeBtn" data="${id}">Change</button>
<button type="button" class="archiveBtn" data="${id}" >Archive</button>
<button type="button" class="deleteBtn" data="${id}">Delete</button></div>
      </li>
`);
    notesList.insertAdjacentHTML('beforeEnd', noteItem);
}
renderList(Notes);