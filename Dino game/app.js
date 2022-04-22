document.addEventListener('DOMContentLoaded', ()=>{
    const dino = document.querySelector('.dino');
    const grid = document.querySelector('.grid');
    const grav = 0.9;
    let isJumping = false;
    let isGameOver = false;

    const control = (e)=>{
        if(e.keyCode == 32){
            if(!isJumping){
                isJumping = true;
                jump()
            }
        }
    }

    let position = 0;
    const jump = ()=>{
        let count = 0;
        let timerId = setInterval(()=>{
            position += 30;
            position *= grav
            dino.style.bottom = position + 'px';
            count++    
            if(count >= 15){
                clearInterval(timerId)
                let innerTimerId = setInterval(() => {
                    position -= 6.5
                    position *= grav
                    dino.style.bottom = position + 'px'
                    count--
                    if(count <= 0){
                        clearInterval(innerTimerId)
                        isJumping = false;
                    }
                }, 40);
            }
        },40)
    }

    const generateObstacle = ()=>{
        let pos = 1200
        let obstacle = document.createElement('div');
        if(!isGameOver){
            obstacle.classList.add('obstacle');
        }
        grid.appendChild(obstacle)
        let timerId = setInterval(() => {
            pos -= 20;
            obstacle.style.left = pos + 'px';
            if((pos > 30 && pos < 90) && position <= 60){
                clearInterval(timerId) 
                document.querySelector('.gameover').style.display = 'inherit'
                while(grid.firstChild){
                    grid.removeChild(grid.lastChild)
                }
                isGameOver = true
            }
            if(pos < -60){
                clearInterval(timerId)
            }
        }, 40);
        if(!isGameOver){
            setTimeout(generateObstacle, getran(1000,4000))
        }
    }
    generateObstacle()

    document.addEventListener('keyup', control)

    function getran(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }
});