const output = document.querySelector('.output');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', (e)=>{
        switch(e.target.innerText){
            case 'AC':
                output.innerHTML = ''
                break;
            case 'C':
                output.innerHTML = output.innerHTML.slice(0,-1)
                break;
            case '=':
                try{
                    output.innerHTML = eval(output.innerHTML)
                } catch{
                    alert('Error!')
                }
                break;
            default:
                output.innerHTML += e.target.innerText;
                break;  
        }
    })
});