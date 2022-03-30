let ul = document.querySelector('.menu ul');
let menuToggle = document.querySelector('.menu-toggle')
menuToggle.addEventListener('click', () =>
    ul.classList.toggle('slide')
)