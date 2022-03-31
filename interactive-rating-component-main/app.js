let ratePoint = document.querySelectorAll('.container .rate .anak')
ratePoint.forEach(element => {
    element.addEventListener('click', ()=>{
        ratePoint.forEach(element => {
            element.className = 'anak'
        });
        element.classList.add('gantiBC')
    });
});



let submit = document.querySelector('.container .submit')
submit.addEventListener('click', () =>{
    submit.classList.add('gantibc');
    ratePoint.forEach(element => {
        if(element.classList.contains('gantiBC')){
            value = element.value
        }
    });

    let afterPhase = document.querySelector('.after')
    afterPhase.style.display = 'inherit'
    pAfter = document.querySelector('.p-after');
    pAfter.innerHTML = `You selected ${value} out of 5`
})