import { Notes } from "../data/notes";

const notesList = document.querySelector('.notesList');
const createButton = document.querySelector('.createButton');

function renderList(obj) {
    if (obj.length) {
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
<p>${Name}</p><p>${Created}</p><p>${Category}</p><p>${Content}</p><p>${Dates}
<button type="button">Change</button>
<button type="button">Archive</button>
<button type="button">Delete</button>
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
renderList(Notes);