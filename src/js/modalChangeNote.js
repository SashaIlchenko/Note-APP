const notesList = document.querySelector('.notesList')

export const backdgop = document.querySelector('.js-backdrop');
const modalNotes = document.querySelector('.js-modal-change');
backdgop.addEventListener('click', onBackdropClick);

notesList.addEventListener('click', onBtnClick)
function onBtnClick(e) {
    const noteItem = e.target;
    if (noteItem.nodeName !== "svg" && noteItem.nodeName !== "path") {
        return
    }
    else if (noteItem.id === "update") {
        localStorage.setItem("selected", JSON.stringify(noteItem.getAttribute('data') || null))
        modalNotes.classList.remove('is-hidden')
        backdgop.classList.remove('is-hidden')
    }
}

function onBackdropClick(event) {
    if (event.target === event.currentTarget) {
        modalNotes.classList.add('is-hidden')
        backdgop.classList.add('is-hidden')
    }
}
