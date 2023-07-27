import dayjs from "dayjs";
const archiveList = document.querySelector('.archiveList')
export function renderArchiveList(obj) {
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
                }) => `<tr class="noteItem" data="${id}">
<td class="table-item">${Name}</td>
<td class="table-item">${dayjs(Created, 'YYYY-MM-DD')}</td>
<td class="table-item">${Category}</td><td>${Content}</td>
<td class="table-item">${Dates}
<td class="table-item" id="buttonList">
<button type="button" class="changeBtn main-button" data="${id}"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
<path fill="#000000" d="M13.5 0c1.381 0 2.5 1.119 2.5 2.5 0 0.563-0.186 1.082-0.5 1.5l-1 1-3.5-3.5 1-1c0.418-0.314 0.937-0.5 1.5-0.5zM1 11.5l-1 4.5 4.5-1 9.25-9.25-3.5-3.5-9.25 9.25zM11.181 5.681l-7 7-0.862-0.862 7-7 0.862 0.862z"></path>
</svg>
</button>
<button type="button" class="unArchiveBtn main-button" data="${id}"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
<path fill="#000000" d="M13 1h-10l-3 3v10.5c0 0.276 0.224 0.5 0.5 0.5h15c0.276 0 0.5-0.224 0.5-0.5v-10.5l-3-3zM8 13l-5-4h3v-3h4v3h3l-5 4zM2.414 3l1-1h9.172l1 1h-11.172z"></path>
</svg></button>
<button type="button" class="deleteBtn main-button" data="${id}"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
<path fill="#000000" d="M2 5v10c0 0.55 0.45 1 1 1h9c0.55 0 1-0.45 1-1v-10h-11zM5 14h-1v-7h1v7zM7 14h-1v-7h1v7zM9 14h-1v-7h1v7zM11 14h-1v-7h1v7z"></path>
<path fill="#000000" d="M13.25 2h-3.25v-1.25c0-0.412-0.338-0.75-0.75-0.75h-3.5c-0.412 0-0.75 0.338-0.75 0.75v1.25h-3.25c-0.413 0-0.75 0.337-0.75 0.75v1.25h13v-1.25c0-0.413-0.338-0.75-0.75-0.75zM9 2h-3v-0.987h3v0.987z"></path>
</svg></button></td>
      </tr>
`
            )
            .join('');
        archiveList.insertAdjacentHTML('afterBegin', markup);

    } else {
        // textError.classList.add('is-active');
        // setTimeout(() => {
        //     textError.classList.remove('is-active');
        // }, 2000);
    }
}