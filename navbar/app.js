const buttonToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

buttonToggle.addEventListener('click', ()=>{
    links.classList.toggle('show-links')
})
