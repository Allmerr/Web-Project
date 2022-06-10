const timeTag = document.querySelector('.time b')
const mistakeTag = document.querySelector('.mistakes span')
const cpmTag = document.querySelector('.cpm span')
const wpmTag = document.querySelector('.wpm span')


let count = 0;
let timeLeft = 60;
let isType = 0;
let mistake = 0;
let cpm = 0;
let timer;


const randomParagraph = ()=>{
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(response => {
            updateUI(response.slip.advice)
            eventKeydown()
        })
}

const updateUI = (text)=>{
    document.querySelector('.text-place p').innerHTML = '';
    text.split('').forEach(te => {
        document.querySelector('.text-place p').innerHTML += `<span>${te}</span>`
    });
    document.querySelectorAll('.text-place p span')[0].classList.add('active');
}

const eventKeydown = ()=>{
    const input = document.querySelector('input');
    input.addEventListener('input', inputMasuk)
    document.addEventListener('keydown', ()=> {
        input.focus()
    })
}


const inputMasuk = (e)=>{
    const input = document.querySelector('input');
    const allSpan = document.querySelectorAll('.text-place p span');

    timerFun()

    if(input.value.length !== allSpan.length){
        if(e.data == null){
            count--
            if(allSpan[count].classList.contains('incorect')){
                mistake--
            }
            allSpan[count].classList.remove('corect','incorect')
        }else{
            if(input.value[count] == allSpan[count].innerHTML){
                allSpan[count].classList.add('corect')
                cpm++
            }else{
                allSpan[count].classList.add('incorect')
                mistake++
            }
            count++
        }
        try {
            allSpan.forEach(span => span.classList.remove('active'))
            allSpan[count].classList.add('active')
        } catch (err) {
            console.log(err);
        }
    }else{
        allSpan.forEach(span => span.classList.remove('active'))
        clearInterval(timer);
        input.value = '';
    }     
    
    let wpm = ((((count - mistake) / 5) / (60 - timeLeft)) * 60.5)
    wpm = wpm < 0 || !wpm || wpm == Infinity ? 0 : wpm
    wpmTag.innerHTML = Math.round(wpm);
    
    mistakeTag.textContent = mistake
    cpmTag.textContent = cpm
}

const timerFun = ()=>{
    const input = document.querySelector('input');
    if(!isType){
        isType = true
        timer = setInterval(() => {
            timeLeft--
            timeTag.textContent = timeLeft;
            if(timeLeft == 0){
                clearInterval(timer);
                input.value = '';
            }
        }, 1000);
    }
}

document.querySelector('button').addEventListener('click', ()=>{
    const input = document.querySelector('input');
    count = 0;
    timeLeft = 60;
    isType = 0;
    mistake = 0;
    cpm = 0;
    clearInterval(timer);
    input.value = '';
    wpmTag.innerHTML = 0;
    mistakeTag.textContent = 0;
    cpmTag.textContent = 0;
    timeTag.textContent = 60;
    randomParagraph()
})

randomParagraph()

