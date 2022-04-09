const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const contents = document.querySelectorAll('.content');

about.addEventListener('click',(e)=>{
    eAttribute = e.target.getAttribute('data-id')
    contents.forEach(element => {
        if(element.getAttribute('id') == eAttribute){
            contents.forEach(ele => {
                ele.classList.remove('active');
            });
            element.classList.add('active');
        }
    });
    btns.forEach(element => {
        if(element.getAttribute('data-id') == eAttribute){
            btns.forEach(ele => {
                ele.classList.remove('active');
            });
            element.classList.add('active');
        }
    });
})