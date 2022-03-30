let ul = document.querySelector('nav ul');
let menuToggle = document.querySelector('.menu-toggle')
menuToggle.addEventListener('click', () =>
    ul.classList.toggle('slide')
)