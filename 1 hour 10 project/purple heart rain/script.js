const makeRain = ()=>{
    const heart = document.createElement('div');
    const heartText = document.createTextNode('💜');
    heart.appendChild(heartText);
    heart.classList.add('heart');
    heart.style.left = `${Math.round(Math.random()*100)}%`;
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove()
    }, 5000);
}

setInterval(() => {
    makeRain()
}, 150);