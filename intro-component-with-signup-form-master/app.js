const form = document.querySelector('form')
const inputs = document.querySelectorAll('.reg form input');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const fisrtName = document.querySelector('input.first-name');
    const lastName = document.querySelector('input.last-name');
    const email = document.querySelector('input.email-address');
    const password = document.querySelector('input.password');

    if(fisrtName.value === ''){
        inputFalse(fisrtName)
    }else{
        inputTrue(fisrtName)
    }

    if(lastName.value === ''){
        inputFalse(lastName)
    }else{
        inputTrue(lastName)
    }

    if((email.value).match(/(@+).*(gmail\.com)/gm)){
        inputTrue(email)
    }else{
        inputFalse(email)
    }

    if(password.value === ''){
        inputFalse(password)
    }else{
        inputTrue(password)
    }


})



const inputFalse = (el)=>{
    el.classList.add('input-false')
    el.parentElement.querySelector('img').style.display = 'inherit'
    el.parentElement.querySelector('p.p-input').style.display = 'inherit'
    el.classList.add('error')
}

const inputTrue = (el)=>{
    el.classList.remove('input-false');
    el.parentElement.querySelector('img').style.display = 'none'
    el.parentElement.querySelector('p.p-input').style.display = 'none'
    el.classList.remove('error')
}

























// inputs.forEach(element => {
//     if(element.value === ''){
//         element.parentElement.querySelector('img').style.display = 'inherit'
//         element.parentElement.querySelector('p.p-input').style.display = 'inherit'
//         if(element.getAttribute('placeholder') == 'Email Address'){
//             element.setAttribute('placeholder', 'email@example/com')
//         }else{
//             element.removeAttribute('placeholder')
//         }
        
//         element.classList.add('input-false')
//         // inputs.forEach(ele => {
//         //     console.log(ele)
//         //     ele.classList.add('input-false')
//         // });
//     }
// });




        // if(element.getAttribute('placeholder') == 'Email Address'){
        //     if((element.value).match(/(@+).*(gmail\.com)/gm)){
        //         console.log(true)
        //     }else{
        //         element.classList.add('input-false')
        //     }
        // }