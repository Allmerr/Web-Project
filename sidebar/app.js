const sidebar = document.querySelector('.sidebar-toggle');

sidebar.addEventListener('click', ()=>{
    document.querySelector('.sidebar').classList.toggle('show-sidebar')
});

const closeSidebar = document.querySelector('.fa-times');

closeSidebar.addEventListener('click', ()=>{
    document.querySelector('.sidebar').classList.remove('show-sidebar')
})