const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const circles = document.querySelectorAll('.circle');
const progressLine = document.querySelector('.progress-line')

let counter = 0;

next.addEventListener('click', ()=>{
    counter++;

    if(counter > circles.length-1){
        counter = circles.length-1;
    }

    circleMove()
    lineMove()
});

prev.addEventListener('click', ()=>{
    counter--;

    if(counter < 0){
        counter = 0;
    }

    console.log(counter);

    circleMove()
    lineMove()
});

const circleMove = ()=>{
    circles.forEach((circle, ind) => {
        if(ind <= counter){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    });
}

const lineMove = ()=>{
    progressLine.style.width = ((((counter+1)-1) / ((circles.length)-1)) * 100) + '%';
    buttonDis() 
}

const buttonDis = ()=>{
    if(counter == 0){
        prev.disabled = true;
    }else if(counter == circles.length-1){
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }
}