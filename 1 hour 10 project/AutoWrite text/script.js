const text = 'My name is kevin; nice to meet you:)';

let counter = 1;
const writeText = ()=>{
    document.body.querySelector('h1').innerHTML = text.slice(0,counter);
    counter++

    if(counter > text.length){
        clearInterval(timerId)
    }
}

const timerId = setInterval(() => {
    writeText()
}, 150);
