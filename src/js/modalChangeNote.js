const notesList = document.querySelector('.notesList')
const changeButtons = document.querySelectorAll('.changeBtn');

export const backdgop = document.querySelector('.js-backdrop');
const modalNotes = document.querySelector('.js-modal-change');
backdgop.addEventListener('click', onBackdropClick);

changeButtons.forEach(button => {
    button.addEventListener('click', onBtnClick)
})

function onBtnClick(e) {
    const noteItem = e.currentTarget;
    localStorage.setItem("selected", JSON.stringify(noteItem.getAttribute('data') || null))
    modalNotes.classList.remove('is-hidden')
    backdgop.classList.remove('is-hidden')
}

function onBackdropClick(event) {
    if (event.target === event.currentTarget) {
        modalNotes.classList.add('is-hidden')
        backdgop.classList.add('is-hidden')
    }
}
