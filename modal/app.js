// select modal-btn,modal-overlay,close-btn
const modalBtn = document.querySelector('.modal-btn');
const closeBtn = document.querySelector('.close-btn')
const modalOverlay = document.querySelector('.modal-overlay');


// listen for click events on modal-btn and close-btn

// when user clicks modal-btn add .open-modal to modal-overlay
modalBtn.addEventListener('click', ()=>{
    modalOverlay.classList.add('open-modal')
})

// when user clicks close-btn remove .open-modal from modal-overlay
closeBtn.addEventListener('click', ()=>{
    modalOverlay.classList.remove('open-modal');
})