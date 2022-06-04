document.querySelector('.submit').addEventListener('click', ()=>{
    const valueInput = document.querySelector('.input').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${valueInput}`)
        .then(response => response.json())
        .then((response) => {
            let el = '';
            response.meals.forEach(meal => {
                el += 
                `
                <div class="card">
                    <img src="${meal.strMealThumb}" alt="">
                    <h3>${meal.strMeal}</h3>
                    <button idMeal="${meal.idMeal}" class="detail-button">See receipe</button>
                </div>
                `
            });
            document.querySelector('.cards').innerHTML = el;
        })
})

document.addEventListener('click', (e)=>{
    if(e.target.classList.contains('detail-button')){
        const id = e.target.getAttribute('idMeal')
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(response => response.json())
            .then(response => {
                const mealInfo = response.meals[0];
                let el = 
                `
                <div class="modal-content">
                    <h1>${mealInfo.strMeal}</h1>
                    <h3>Instructions:</h3>
                    <p>${mealInfo.strInstructions}</p>
                    <img src="${mealInfo.strMealThumb}" alt="">
                    <button><a href="${mealInfo.strYoutube}" target="_blank">Tutorial</a></button>
                    <div class="close">X</div>
                </div>
                `;
                document.querySelector('.modal').innerHTML = el;
                document.querySelector('.modal').classList.add('active');
            })
    }else if(e.target.classList.contains('close')){
        const parent = e.target.parentElement;
        parent.remove();
        document.querySelector('.modal').classList.remove('active');
    }
})


