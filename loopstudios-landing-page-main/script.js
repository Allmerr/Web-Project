const first = document.querySelector('.first');
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
    btn.addEventListener('click', ()=>{
        first.classList.toggle('show')
        document.body.classList.toggle('overflow-hidden')
    })    
});
