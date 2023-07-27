const createButton = document.querySelector('.createButton');

export const backdgop = document.querySelector('.backdrop');
const modalNotes = document.querySelector('.js-modal-add');

createButton.addEventListener('click', onBtnClick);
backdgop.addEventListener('click', onBackdropClick);


function onBtnClick() {
    modalNotes.classList.remove('is-hidden')
    backdgop.classList.remove('is-hidden')
    document.body.classList.add('no-scroll');
}

function onBackdropClick(event) {
    if (event.target === event.currentTarget) {
        modalNotes.classList.add('is-hidden')
        backdgop.classList.add('is-hidden')
        document.body.classList.remove('no-scroll');
    }

}
