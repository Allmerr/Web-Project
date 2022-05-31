document.querySelector('.submit-container button.submit').addEventListener('click', ()=>{
    const valueInput = Array.from(document.querySelectorAll('.form-control input')).map(input => input.value)
    let el = `<tr>${valueInput.map(value => `<td>${value}</td>`).join('')}</tr>`
    document.querySelector('table').innerHTML += el
})