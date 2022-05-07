const btn = document.querySelector('button');
const ul = document.querySelector('ul');

btn.addEventListener('click', ()=>{
    ul.classList.toggle('active');
    btn.classList.toggle('active');
})