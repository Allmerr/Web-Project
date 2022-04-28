document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault()
    if(document.querySelector('form input').value == ''){
        alert('Plase input an statment')
    }else{
        document.querySelector('.output').innerHTML += `
        <div class="task">
            <span class="task-value">${document.querySelector('form input').value}</span>
            <button class="trash"><i class="fa-solid fa-trash-can"></i></button>
        </div>
        `
        let trashs = document.querySelectorAll('.trash');
        trashs.forEach(trash => {
            trash.addEventListener('click', function(){
                this.parentElement.remove()
            })
        });

        let taskValues = document.querySelectorAll('.task-value');
        taskValues.forEach(task => {
            task.addEventListener('click', ()=>{
                task.classList.toggle('complete')
            })
        });
        document.querySelector('form input').value = ''
    }
})