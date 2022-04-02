const colors = ["green", "red", "orange", "gray", "yellow", 'blue', 'pink'];  // length = 7

const btn = document.querySelector('#btn');

// random * 7 = (0 < 7) 

btn.addEventListener('click', ()=>{
    const randomColor = Math.floor(Math.random()*colors.length)
    document.body.style.backgroundColor = colors[randomColor]
    const spanChange = document.querySelector('.color');
    spanChange.innerHTML = colors[randomColor]
});
