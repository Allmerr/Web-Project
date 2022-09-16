// lets beat this 
const labels = document.querySelectorAll('label');

labels.forEach(label => {
    label.innerHTML = label.innerText.split('').map((e,i)=>`<span style="transition-delay: ${i*30}ms;">${e}</span>`).join('')
});