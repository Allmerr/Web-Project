// container and images
const slide = document.querySelector('.slide');
const images = document.querySelectorAll('.slide img');

// buttons
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

// counter
let counter = 0;

// event
prev.addEventListener('click', ()=>{
    if(images[counter].classList.contains('first')){
        counter = images.length-1
        let imgWidth = images[counter].clientWidth;
        slide.classList.add('anim')
        slide.style.transform = `translateX(${(-imgWidth*counter)}px)`
        setTimeout(() => {
            slide.classList.remove('anim')
        }, 500);
    }else{
        counter--
        let imgWidth = images[counter].clientWidth;
        slide.classList.add('anim')
        slide.style.transform = `translateX(${(-imgWidth*counter)}px)`
        setTimeout(() => {
            slide.classList.remove('anim')
        }, 500);

    }
    
})


next.addEventListener('click', ()=>{
    if(images[counter].classList.contains('last')){
        counter = 0;
        let imgWidth = images[counter].clientWidth;
        slide.classList.add('anim')
        slide.style.transform = `translateX(${(-imgWidth*counter)}px)`
        setTimeout(() => {
            slide.classList.remove('anim')
        }, 500);
    }else{
        counter++
        let imgWidth = images[counter].clientWidth;
        slide.classList.add('anim')
        slide.style.transform = `translateX(${(-imgWidth*counter)}px)`
        setTimeout(() => {
            slide.classList.remove('anim')
        }, 500);
    }
   
})

