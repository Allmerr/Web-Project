document.querySelector('.btn-search').addEventListener('click', function(){
    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=102bbc93&s=' + document.querySelector('.input-search').value,
        success : ({Search : movies})=>{
            tampilMovies(movies)
            $('.button-detail').on('click', function(){
                $.ajax({
                    url: `http://www.omdbapi.com/?apikey=102bbc93&i=` + $(this)[0].getAttribute('data-imdbId'),
                    success: (result)=>{
                        tampilDetailMovie(result)
                    }
                })
            })
        },
        error: (e)=>{
            console.log(e.responseText);
        }
    })
    
})



const tampilMovies = (movies)=>{
    let el = '';
    movies.forEach(movie => {
        el += `
        <div class="col-2 my-3">
            <div class="card">
                <img src="${movie.Poster}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${movie.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
                <button type="button" class="btn btn-primary button-detail" data-bs-toggle="modal" data-bs-target="#moviemodal" data-imdbID="${movie.imdbID}">See Detatils</button>
                </div>
            </div>
        </div>`
    });
    document.querySelector('.movies-container').innerHTML = el
}

const tampilDetailMovie = (movie)=>{
    document.querySelector('.modal-dialog').innerHTML = `
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="moviemodalLabel">${movie.Title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="row">
                <div class="col-4">
                    <img src="${movie.Poster}" alt="" class="img-fluid">
                </div>
                <div class="col">
                    <div class="card">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><h4>${movie.Title} (${movie.Year})</h4></li>
                            <li class="list-group-item"><strong>Director : </strong>${movie.Director}</li>
                            <li class="list-group-item"><strong>Actors : </strong>${movie.Actors}r</li>
                            <li class="list-group-item"><strong>Writer : </strong>${movie.Writer}</li>
                            <li class="list-group-item"><strong>Plot : </strong><br>${movie.Plot}</li>
                            <li class="list-group-item"><strong>Imdb Score : </strong>${movie.imdbRating} from ${movie.imdbVotes}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}