const slider = document.querySelector('.slider');

const prev = document.querySelector('button.prev');
const next = document.querySelector('button.next');

const images = document.querySelectorAll('img');
const bulls = document.querySelectorAll('.bull');

let counter = 0;



next.addEventListener('click', ()=>{
    if(images[counter].classList.contains('last')){
        counter = 0;
        const imgWidth = images[counter].clientWidth;
        slider.style.transform = `translateX(${-(imgWidth*counter)}px)`;
        slider.classList.add('active');

        setTimeout(() => {
            slider.classList.remove('active');
        }, 301);    
    }else{
        counter++
        const imgWidth = images[counter].clientWidth;
        slider.style.transform = `translateX(${-(imgWidth*counter)}px)`;
        slider.classList.add('active');
    
        setTimeout(() => {
            slider.classList.remove('active');
        }, 301);
    
    }
    bullMove()

})

prev.addEventListener('click', ()=>{
    if(images[counter].classList.contains('first')){
        counter = images.length-1
        const imgWidth = images[counter].clientWidth;
        slider.style.transform = `translateX(${-(imgWidth*counter)}px)`;
        slider.classList.add('active');

        setTimeout(() => {
            slider.classList.remove('active');
        }, 301);
    }else{
        counter--
        const imgWidth = images[counter].clientWidth;
        slider.style.transform = `translateX(${-(imgWidth*counter)}px)`;
        slider.classList.add('active');
    
        setTimeout(() => {
            slider.classList.remove('active');
        }, 301);
    
    }

    bullMove()

})

const bullMove = ()=>{
    bulls.forEach(bull => {
        bull.classList.remove('active')
    });
    bulls[counter].classList.add('active')
}

bulls.forEach(bull => {
    bull.addEventListener('click', ()=>{
        counter = bull.getAttribute('value');
        const imgWidth = images[counter].clientWidth;
        slider.style.transform = `translateX(${-(imgWidth*counter)}px)`;
        slider.classList.add('active');

        setTimeout(() => {
            slider.classList.remove('active');
        }, 301);
        bullMove()
    })
});

bullMove()
