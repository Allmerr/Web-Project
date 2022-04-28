const waktu = document.querySelector('.waktu');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');

let minute = 00;
let second = 00;
let mili = 00;

let isPause = false;


start.addEventListener('click', (e)=>{
    isPause = false;
    const timerId = setInterval(() => {
        if(isPause){
            clearInterval(timerId)
        }else{
            if(mili > 98){
                mili = 0;
                second++
            }
            if(second > 59){
                second = 0;
                minute++
            }
            mili++
        
            waktu.innerHTML = `${penambahNol(minute)}:${penambahNol(second)}:${penambahNol(mili)}`;    
        }
    }, 10);
});

pause.addEventListener('click', ()=>{
    isPause = true;
})

reset.addEventListener('click', ()=>{
    isPause = true;
    minute = 00;
    second = 00;
    mili = 00;
    waktu.innerHTML = `${penambahNol(minute)}:${penambahNol(second)}:${penambahNol(mili)}`;
})

const penambahNol = (angka)=>{
    if(angka < 10){
        return `0${angka}`
    }else{
        return angka
    }

}