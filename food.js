// load data 
const searchFood = () => {
    const searchInput = document.getElementById('search-box');
    const searchBox = searchInput.value
    // console.log(searchBox);
    searchInput.value = '';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchBox}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeal(data.meals))
}

// displayMeal function 
const displayMeal = foods => {
    const displayItem = document.getElementById('displayFood');
    for(let food of foods) {
        console.log(food);
const div = document.createElement('div');
div.classList.add('col');
div.innerHTML = `

<div class="card h-100">
  <img src="${food.strMealThumb}" class="card-img- img-fluid" alt="...">
  <div class="card-body">
    <h2 class="card-title text-center">${food.strMeal}</h5>
    <h5 class="card-title text-center">Food Category: ${food.strCategory}</h2>
    <p class="card-text text-center">${food.strInstructions.slice(0,200)}</p>
  </div>
  <div class="card-footer">
  <button type="button" class="btn btn-outline-secondary item-button">See Details</button>
  
</div>
</div>
`;
displayItem.appendChild(div)


    }
}