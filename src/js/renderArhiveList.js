import dayjs from "dayjs";
const archiveList = document.querySelector('.archiveList')
const archivHeader = document.querySelector('.archiveTable')
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
<td class="table-item">${dayjs(Dates, 'YYYY-MM-DD')}
<td class="table-item"  data="${id}" id="buttonList">
<button type="button" class="unArchiveBtn main-button" data="${id}"><svg version="1.1" id="archive" data="${id}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
<path id="archive" fill="#000000" d="M13 1h-10l-3 3v10.5c0 0.276 0.224 0.5 0.5 0.5h15c0.276 0 0.5-0.224 0.5-0.5v-10.5l-3-3zM8 13l-5-4h3v-3h4v3h3l-5 4zM2.414 3l1-1h9.172l1 1h-11.172z"></path>
</svg></button></td>
      </tr>
`
            )
            .join('');
        archiveList.innerHTML = markup;

    } else {
        archiveList.innerHTML = '';
        archivHeader.classList.add('is-hidden')
    }
}