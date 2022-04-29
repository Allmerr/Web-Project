window.addEventListener('DOMContentLoaded', ()=>{

    const clock = document.querySelector('.clock')

    setInterval(() => {
        let hour = new Date().getHours();
        let minute = new Date().getMinutes();
        let second = new Date().getSeconds();
        clock.innerHTML = `${perubahWaktu(hour)}:${perubahWaktu(minute)}:${perubahWaktu(second)} ${isAm(hour)}`
    }, 1000);

    const isAm = (waktu)=>{
        if(waktu >= 12){
            return 'PM'
        }else{
            return 'AM'
        }
    }

    const perubahWaktu = (waktu) =>{
        if(waktu < 10){
            return '0' + waktu;
        }else{
            return waktu
        }
    }
})