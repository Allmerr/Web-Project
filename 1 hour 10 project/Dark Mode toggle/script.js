const button = document.querySelector('button');

button.addEventListener('click', ()=>{
    button.classList.toggle('dark');
    document.body.classList.toggle('dark')
})