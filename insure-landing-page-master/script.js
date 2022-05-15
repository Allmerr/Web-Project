const nav = document.querySelector('nav');
const hamburger = document.querySelector('nav .hamburger');

hamburger.addEventListener('click' , ()=>{
    nav.classList.toggle('show')
    document.body.classList.toggle('overflow-hidden')
})