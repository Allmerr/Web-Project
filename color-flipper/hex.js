const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector('#btn');

// random * 16 = (0 < 16) 


btn.addEventListener('click', ()=>{
    let randomHex = ''
    for(var i = 0; i < 6; i++){
        let random = Math.floor(Math.random()*hex.length)
        randomHex += hex[random];
    }
    document.body.style.backgroundColor = '#' + randomHex;
    document.querySelector('.color').innerHTML = '#' + randomHex

});
