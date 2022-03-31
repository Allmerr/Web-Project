// dapatkan pilihan komputer
var getPilihanCom = function(){
    var comp = Math.random();
    if(comp < 0.34) return 'gajah';
    if(comp >= 0.34 && comp <= 0.66) return 'orang';
    return 'semut'
}

// menentukan rules
var getHasil = function(comp, player){
    if(player === comp) return 'SERI!';
    if(player === 'gajah') return (comp === 'orang') ? 'MENANG!' : 'KALAH!';
    if(player === 'orang') return (comp === 'semut') ? 'MENANG!' : 'KALAH!';
    if(player === 'semut') return (comp === 'gajah') ? 'MENANG!' : 'KALAH!';
}

// dapatkan pilihan user 
var pGajah = document.getElementsByClassName('gajah')[0];
var pOrang = document.getElementsByClassName('orang')[0];
var pSemut = document.getElementsByClassName('semut')[0];

var pilihan = document.querySelectorAll('.man img')
pilihan.forEach(function(pil){
    pil.addEventListener('click', function(){
        var pilihanCom = getPilihanCom();
        var pilihanPlayer = pil.className;
        var hasil = getHasil(pilihanCom, pilihanPlayer);
        var gambarCom = document.getElementById('imgcom');
        gambarCom.setAttribute('src', `img/${pilihanCom}.png`);
        var info = document.querySelector('.bulat');
        info.innerHTML = `${hasil}`
    })
});