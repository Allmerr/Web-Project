let question = document.querySelectorAll('.question')
let answer = document.querySelectorAll('.answer')

for(let i = 0; i < question.length; i++){
    question[i].addEventListener('click', function(){
        answer[i].classList.toggle('active')
        question[i].querySelector('.i').classList.toggle('bold')
        question[i].querySelector('.arrow').classList.toggle('rotate')
    });
}


