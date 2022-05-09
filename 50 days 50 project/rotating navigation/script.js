const buttons = document.querySelectorAll('button');
const container = document.querySelector('.container');

buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        container.classList.toggle('show-nav')
    })
});