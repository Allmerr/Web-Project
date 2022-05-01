var answers = ["It is certain", 
                   "It is decidedly so", 
                   "Without a doubt", 
                   "Yes - definitely",
                   "You may rely on it", 
                   "As I see it, yes", 
                   "Most likely", 
                   "Outlook good", 
                   "Yes", "Signs point to yes",
                   "Don't count on it", 
                   "My reply is no",
                   "My sources say no", 
                   "Outlook not so good",
                   "Very doubtful", 
                   "Reply hazy, try again", 
                   "Ask again later", 
                   "Better not tell you now",
                   "Cannot predict now", 
                   "Concentrate and ask again"];
const container = document.querySelector('.container');
const h1 = document.querySelector('.container h1');

container.addEventListener('click', ()=>{
    const getran = Math.round(Math.random()*8);
    h1.innerHTML = getran
});

const form = document.querySelector('form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const getran = Math.round(Math.random()*answers.length-1)
    h1.innerHTML = `<p>${answers[getran]}</p>`
    const p = document.querySelector('p');
    p.classList.add('segitiga')
})

// background-color: ;
