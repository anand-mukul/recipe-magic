function showSavedRecipes() {
    const recipes = JSON.parse(localStorage.getItem("bookmarkedRecipes"));
    recipes.forEach((recipe) => createBookmarkedRecipeCard(recipe));
}

function createBookmarkedRecipeCard(recipe) {
    const recipeCard = document.createElement("div");
    recipeCard.className = "recipe-card";

    const bookmarkedRecipes = JSON.parse(localStorage.getItem('bookmarkedRecipes')) || [];
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
        <p id="recipe-card-ingredients">${recipe.ingredients.join(', ')}</p>
        <p id="recipe-card-duration">Duration: ${recipe.duration}</p>
        <p id="recipe-card-category">Category: ${recipe.category}</p>
        <div class="empty-div">
        <a id="recipe-link" href="${createRecipeUrl(recipe.title)}"><div id="recipe-card-button"></div></a>
        </div>
        <div id="recipe-card-rating">
          Rating: ${averageRating(recipe.id)}<span class="star filled"><i class="ri-star-fill"></i></span>
        </div>
      </div>
    `;
    const savedRecipes = document.getElementById("saved-recipe");
    savedRecipes.appendChild(recipeCard);
}

showSavedRecipes();