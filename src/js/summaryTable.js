const summaryList = document.querySelector('.summaryTable');

export function renderSummaryTable(arr1, arr2) {
      const ideaArchiveArr = arr1.filter(el => el.Category === "Idea")
      const thoughtArchiveArr = arr1.filter(el => el.Category === "Random Thought")
      const taskArchiveArr = arr1.filter(el => el.Category === "Task")
      const ideaArr = arr2.filter(el => el.Category === "Idea")
      const thoughtArr = arr2.filter(el => el.Category === "Random Thought")
      const taskArr = arr2.filter(el => el.Category === "Task")

      const markup = (`<tr class="noteItem" >
    <td class="table-item">Task</td>
    <td class="table-item">${taskArr.length}</td>
    <td class="table-item">${taskArchiveArr.length}</td>
          </tr>
          <tr class="noteItem" >
    <td class="table-item">Random thought</td>
    <td class="table-item">${thoughtArr.length}</td>
    <td class="table-item">${thoughtArchiveArr.length}</td>
          </tr>
          <tr class="noteItem">
    <td class="table-item">Idea</td>
    <td class="table-item">${ideaArr.length}</td>
    <td class="table-item">${ideaArchiveArr.length}</td>
          </tr>
    `);
      summaryList.innerHTML = markup;
}