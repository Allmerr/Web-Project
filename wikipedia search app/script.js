const url = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=';

document.querySelector('button').addEventListener('click' , async(e)=>{
    e.preventDefault();
    const infos = await getInfo();
    updateUI(infos);
});

const getInfo = ()=>{
    return fetch(`${url}${document.querySelector('input').value}`)
        .then(response => response.json())
        .then(response => response.query.search)
}

const updateUI = (infos)=>{
    if(infos.length > 0) {
        let el = '';
        infos.forEach(info => {
            el += 
            `
            <div class="card">
                <h3><a href="https://en.wikipedia.org/?curid=${info.pageid}" target="_blank">${info.title}</a></h3>
                <h4><a href="https://en.wikipedia.org/?curid=${info.pageid}" target="_blank">https://en.wikipedia.org/?curid=${info.pageid}</a></h4>
                <p>${info.snippet}</p>
            </div>
            `
        });
        document.querySelector('.result').innerHTML = el;
    } else{
        document.querySelector('.result').innerHTML = 
        `
        <div class="card error">
            <h3><a href="">Not Found</a></h3>
            <p>Try correct your inputs.</p>
        </div>
        `
    }
    
}