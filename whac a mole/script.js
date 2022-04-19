const gamePlay = ()=>{
    play.removeEventListener('click', gamePlay)

    // kita siapkan target document
    const squares = document.querySelectorAll('.square')
    const score = document.querySelector('.score')
    score.innerHTML = 0
    const timeLeft = document.querySelector('.time-left')


    let result = 0;
    let currentTime = 60;

    // menambahkan kelas khusus ke random kotak
    const randomSquares = ()=>{
        squares.forEach(square => {
            square.classList.remove('mole')
        });
        squares[Math.floor(Math.random()*9)].classList.add('mole') // Floor(0 < 9) 
    };

    // mengecek kalau target yang sudah ditempel kelas khusus diklik 
    squares.forEach(square => {
        square.addEventListener('mousedown', ()=>{
            if(square.classList.contains('mole')){
                result++
                score.innerHTML = result
            }
        });
    });


    const countDown = ()=>{
        currentTime--
        timeLeft.innerHTML = currentTime

        if(currentTime  <= 0){
            clearInterval(playTime)
            clearInterval(playMull)
            alert(`Game Finish! \n your score: ${result}` )
            squares.forEach(square => {
                square.classList.remove('mole')
            });
            play.addEventListener('click', gamePlay)
        }
    }

    let playTime = setInterval(countDown, 1000)
    let playMull = setInterval(randomSquares, 600)

}

const play = document.querySelector('.play');
play.addEventListener('click', gamePlay);