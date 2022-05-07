const sounds = [
    'applause',
    'boo',
    'gasp',
    'tada',
    'victory',
    'wrong'
];

const container = document.querySelector('.container')

sounds.forEach(sound => {
    const button = document.createElement('button');
    const buttonText = document.createTextNode(sound)
    button.appendChild(buttonText);
    container.appendChild(button);
    button.addEventListener('click' , (e)=>{
        document.querySelector(`.${sound}`).play()
    })
});