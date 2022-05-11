const menu = document.querySelector('.menu')
const modal = document.querySelector('.modal')
const contentModal = document.querySelector('.modal__container ')
const background = document.querySelector('.modal__background ')

function disMenu(){
    menu.addEventListener('click',() => {
        modal.classList.add('open')
        background.classList.add('open')
    })

    modal.addEventListener('click',() => {
        modal.classList.remove('open')
        background.classList.remove('open')
    })
    contentModal.addEventListener('click',e => {
        e.stopPropagation()
    })
}

disMenu()