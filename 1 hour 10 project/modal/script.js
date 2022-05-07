const btns = document.querySelectorAll('button');
const modalContainer = document.querySelector('.modal-container');

btns.forEach(btn => {
    btn.addEventListener('click', ()=>{
        modalContainer.classList.toggle('active')
    })
});