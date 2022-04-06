//using selectors inside the element
let allBtns = document.querySelectorAll('.question-btn');

// traversing the dom
allBtns.forEach(element => {
    element.addEventListener('click', ()=>{
        allBtns.forEach(el => {
            el.parentElement.parentElement.classList.remove('show-text')
        });
        element.parentElement.parentElement.classList.add('show-text')
    })
});
