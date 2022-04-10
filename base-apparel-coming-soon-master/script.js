const submit = document.querySelector('form');
const input = document.querySelector('.input');

submit.addEventListener('submit', (e)=>{
    e.preventDefault()
    if((input.value).match(/(@+).*(gmail\.com)/gm)){
        window.document.querySelector('body').innerHTML = `<h1 style='text-align:center; margin-top:40px;'>Thank You</h1><br><p style='text-align:center;'>we will send you any infomation</p>`
    }else{
        document.querySelector('.error-text').style.display = 'inherit';
        document.querySelector('.img-error').style.display = 'inherit';
    }
})