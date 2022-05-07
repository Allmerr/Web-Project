const btn = document.querySelector('button');
const containerNotif = document.querySelector('.container-notif');

btn.addEventListener('click', ()=>{
    const notif = document.createElement('div');
    const notifText = document.createTextNode('New Notif!');
    notif.appendChild(notifText);
    notif.classList.add('notif');

    containerNotif.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 5000);
});