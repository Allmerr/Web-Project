const gridDisplay = document.querySelector('.grid')
const spanDisplay = document.querySelector('span');
// kita buat sebuah array yang didalamnya ada object yoang berisi nama dan path menuju image
const cardArray = [
    {
        name : 'fries',
        img : 'images/fries.png'
    },
    {
        name : 'cheeseburger',
        img : 'images/cheeseburger.png'
    },
    {
        name : 'hotdog',
        img : 'images/hotdog.png'
    },
    {
        name : 'ice-cream',
        img : 'images/ice-cream.png'
    },
    {
        name : 'milkshake',
        img : 'images/milkshake.png'
    },
    {
        name : 'pizza',
        img : 'images/pizza.png'
    },
    {
        name : 'fries',
        img : 'images/fries.png'
    },
    {
        name : 'cheeseburger',
        img : 'images/cheeseburger.png'
    },
    {
        name : 'hotdog',
        img : 'images/hotdog.png'
    },
    {
        name : 'ice-cream',
        img : 'images/ice-cream.png'
    },
    {
        name : 'milkshake',
        img : 'images/milkshake.png'
    },
    {
        name : 'pizza',
        img : 'images/pizza.png'
    },

]

let cardChoose = []
let cardChooseId = []
let cardWon = []

// kita acak aray tersebut
cardArray.sort(()=> 0.5 - Math.random())

// kita buat board atau kartu polos belakang kartu unutuk dibalik
const createBoard = ()=>{
    // kita loop sebanyak isi array tersebut
    for(let i = 0; i < cardArray.length; i++){
        // kita declarasi sebuah tag img
        const card = document.createElement('img');
        // img tersebut kita isikan attribute src yang mengarah kepada kartu polos
        card.setAttribute('src', 'images/blank.png');
        // img tersebut kita berikan id khusus sesuai dengan urutanya *kita dapatkan dari loop
        card.setAttribute('data-id', i);
        // kita tempelkan addeventlistener kepada kartunya
        card.addEventListener('click', flipCard)
        // baru kita taro ke html grid
        gridDisplay.appendChild(card)
    }
};

// function untuk membalik kartu
function flipCard(){
    // saat event klik terdegngar
    // dapatkan isi data-id nya
    const cardId = this.getAttribute('data-id')
    // kita lihat dapat apa kalau di cardArray 
    const dapatApa = cardArray[cardId];
    // kita balik kartu alias kita ganti img blank dengan img yang telah kita dapat
    this.setAttribute('src', dapatApa.img);
    // history
    cardChoose.push(dapatApa.name);
    cardChooseId.push(cardId)


    if(cardChoose.length == 2){
        setTimeout(checkMatch, 500)
    }
}


function checkMatch(){
    const cards = document.querySelectorAll('.grid img');
    const first = cardChoose[0]
    const second = cardChoose[1]

    if(first === second){
        console.log('match');
        cards[cardChooseId[0]].setAttribute('src', 'images/white.png');
        cards[cardChooseId[1]].setAttribute('src', 'images/white.png');
        cards[cardChooseId[0]].removeEventListener('click', flipCard);
        cards[cardChooseId[1]].removeEventListener('click', flipCard);
        cardWon.push(...cardChoose)
    }else{
        cards[cardChooseId[0]].setAttribute('src', 'images/blank.png');
        cards[cardChooseId[1]].setAttribute('src', 'images/blank.png');
    }

    spanDisplay.innerHTML = cardWon.length
    cardChoose = []
    cardChooseId = []

    if(cardWon.length >= cardArray.length){
        alert('Done Well of You Wanna try again?')
        document.querySelector('h3').innerHTML = 'Congratulations man!'

    }

}
createBoard()

