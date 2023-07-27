const summaryList = document.querySelector('.summaryTable');

export function renderSummaryTable(id, active, archive) {
    const markup = (`<tr class="noteItem" data="${id}">
<td class="table-item">Notes</td>
<td class="table-item">${active}</td>
<td class="table-item">${archive}</td>
      </tr>
`);
    summaryList.insertAdjacentHTML('afterBegin', markup)
}