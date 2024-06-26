const urlParams = new URLSearchParams(window.location.search);
const recipeSlug = urlParams.get('recipe');

if (recipeSlug) {
  const recipeTitle = decodeURIComponent(recipeSlug).replace(/-/g, ' ');
  
  let recipes;
  try {
    recipes = JSON.parse(localStorage.getItem('recipes'));
  } catch (error) {
    console.error('Error parsing recipes from localStorage', error);
    recipes = [];
  }

  if (Array.isArray(recipes)) {
    const recipe = recipes.find(recipe => (recipe.title).toLowerCase() === recipeTitle.toLowerCase());
    
    console.log(`Loading recipe: ${recipe ? recipe.title : 'Recipe not found'}`);
    
    if (recipe) {
      renderRecipePage(recipe);
    } else {
      displayRecipeNotFound();
    }
  } else {
    displayRecipeNotFound();
  }
} else {
  displayRecipeNotFound();
}

function displayRecipeNotFound() {
  document.getElementById('recipe-in-detail').innerHTML = `
    <h1>Recipe Not Found</h1>
    <p>Sorry, the recipe you are looking for does not exist. Please check the URL or browse our collection for other delicious recipes.</p>
  `;
}

function renderRecipePage(recipe) {
  const recipeCard = document.createElement("div");
  recipeCard.className = "recipe-card";

  let bookmarkedRecipes;
  try {
    bookmarkedRecipes = JSON.parse(localStorage.getItem('bookmarkedRecipes')) || [];
  } catch (error) {
    console.error('Error parsing bookmarked recipes from localStorage', error);
    bookmarkedRecipes = [];
  }

  const isBookmarked = bookmarkedRecipes.some(bookmark => bookmark.id === recipe.id);
  const bookmarkIconClass = isBookmarked ? 'ri-bookmark-fill' : 'ri-bookmark-line';

  recipeCard.innerHTML = `  
    <div class="bookmark-button" data-recipe-id="${recipe.id}">
      <i class="${bookmarkIconClass}"></i>
    </div>
    <div id="recipe-card-image-container">
      <img id="recipe-card-image" src="${recipe.image}" alt="${recipe.title}">
    </div>
    <div id="recipe-card-content">
      <h3 id="recipe-card-title">${recipe.title}</h3>
      <p id="recipe-card-ingredients">Ingredients: ${recipe.ingredients.join(', ')}</p>
      <p id="recipe-card-duration">Duration: ${recipe.duration}</p>
      <p id="recipe-card-category">Category: ${recipe.category}</p>
      <div id="recipe-card-procedure">Procedure: ${recipe.procedure}</div>
      <div id="recipe-card-rating">
        Rating: ${averageRating(recipe.id)} <span class="star filled"><i class="ri-star-fill"></i></span>
      </div>
      <div id="recipe-card-button"><button data-recipe-id="${recipe.id}">Rate</button></div>
    </div>
  `;

  const recipeInDetail = document.getElementById("recipe-in-detail");
  recipeInDetail.appendChild(recipeCard);
}
const rateAndReview = document.getElementById("recipe-card-button");

rateAndReview.addEventListener("click", (event) => {
  const recipeId = event.target.getAttribute("data-recipe-id");
  rateRecipeById(recipeId);
});

// Function to open the popup card
function rateRecipeById(recipeId) {
  // Get the recipe from local storage
  let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
  let recipe = recipes.find(r => r.id === recipeId);

  if (recipe) {
    // Set the title in the popup
    document.getElementById('recipeTitle').textContent = recipe.title;

    // Show the popup with GSAP animation
    gsap.to('#rateRecipePopup', {
      display: 'block',
      opacity: 1,
      duration: 0.5,
    });
  } else {
    console.error('Recipe not found');
  }
}

// Function to submit the rating
function submitRating() {
  let rating = document.getElementById('rating').value;
  let review = document.getElementById('review').value;
  let recipeTitle = document.getElementById('recipeTitle').textContent;

  // Validate the rating input
  if (rating < 1 || rating > 5 || rating === '') {
    alert('Please enter a valid rating between 1 and 5.');
    return;
  }

  // Get the recipes from local storage
  let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
  let recipe = recipes.find(r => r.title === recipeTitle);

  if (recipe) {
    // Update the recipe with the new rating and review
    recipe.userRatings = recipe.userRatings || [];
    recipe.userReviews = recipe.userReviews || [];
    recipe.userRatings.push(Number(rating));
    recipe.userReviews.push(review);

    // Save the updated recipes back to local storage
    localStorage.setItem('recipes', JSON.stringify(recipes));

    // Close the popup
    closePopup();
  } else {
    console.error('Recipe not found');
  }
}

// Function to close the popup card
function closePopup() {
  gsap.to('#rateRecipePopup', {
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
      document.getElementById('rateRecipePopup').style.display = 'none';
    },
  });
}
