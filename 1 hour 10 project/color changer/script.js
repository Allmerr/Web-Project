const button = document.querySelector('button');

button.addEventListener('click', ()=>{
    document.body.style.backgroundColor = `rgba(${getran()},${getran()},${getran()},${Math.round(Math.random()*10)})`
});

const getran = ()=>{
    return Math.round(Math.random()*255)
}