// lets beat this 

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click',()=>{
        document.querySelector('.container').classList.toggle('show-nav')
    })
});

const lis = document.querySelectorAll('ul li');
const contents = document.querySelectorAll('.content')

lis.forEach(li => {
    li.addEventListener('click',()=>{
        const terhubung = li.getAttribute('terhubung');
        console.log(terhubung);
        contents.forEach(content => {
            if(content.classList.contains(terhubung)){
                content.classList.remove('none')
            }else{
                content.classList.add('none')
            }

        });
    })
});