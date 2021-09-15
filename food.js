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
  <button onclick = "singleFood(${food.idMeal})" type="button" class="btn btn-outline-secondary item-button">See Details</button>
  
</div>
</div>
`;
displayItem.appendChild(div)


    }
}
const singleFood = (itemId) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${itemId}`;
    fetch(url)
     .then(res => res.json())
     .then(data => displaySingleMeal(data.meals[0]));
 }

 const displaySingleMeal = meal => {

const showItem = document.getElementById('single-item');
const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML=`
    <div onclick="showDetails(${meal.idMeal})" class="card h-100 w-25 p-2 mx-auto mt-4">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
    </div>
    <button class=" btn btn-outline-primary w-50 mx-auto mb-4">Go To Youtube</button>
  </div>
`
showItem.appendChild(div);

 }
    
    
    
