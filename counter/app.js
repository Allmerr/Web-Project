let value = 0;
let valueDisplay = document.querySelector('#value');

const valueFuntion = (e)=>{

    if(e.target.classList.contains('increase')){
        value++
    }else if(e.target.classList.contains('decrease')){
        value--
    }else{
        value = 0;
    }

    if(value > 0){
        valueDisplay.innerHTML = value;
        valueDisplay.style.color = 'green';
    }else if(value == 0){
        valueDisplay.innerHTML = value;
        valueDisplay.style.color = 'rgb(34,34,34)';
    }else if(value < 0){
        valueDisplay.innerHTML = value;
        valueDisplay.style.color = 'red';
    }
}

let click = window.addEventListener('click', (e)=>{
    valueFuntion(e)
})