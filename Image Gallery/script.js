var thumbnail = document.querySelector('.thumbnail');
var thumbs = document.querySelectorAll('.thumb');
var Jumbo = document.getElementsByClassName('jumbo')[0];

thumbnail.addEventListener('click', function(e){

    // dapatkan value yang diklik
    var gantiDengan = e.target.getAttribute('src');

    // ganti jumbotron dengan img yang diklik
    Jumbo.setAttribute('src', gantiDengan);

    // memberikan animasi fadeIn
    Jumbo.classList.add('fade');
    setTimeout(function(){
        Jumbo.classList.remove('fade');
    }, 500);
    
    // memberikan animasi saat active
    thumbs.forEach(function(el){
        el.className = 'thumb';
    });
    e.target.classList.add('active');

    // selesai
});