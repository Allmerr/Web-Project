const form = document.querySelector('form');
const input = document.querySelector('input');
const errorP = document.querySelector('.error-happen');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if((input.value).match(/(@+).*(gmail\.com)/gm)){
        input.classList.remove('error')
        errorP.style.display = 'none'
    }
    else{
        input.classList.add('error')
        errorP.style.display = 'inherit'
    }
})
