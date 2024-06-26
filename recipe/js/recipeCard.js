function createRecipeCard(recipe) {
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
    const recipeResults = document.getElementById("recipe-results");
    recipeResults.appendChild(recipeCard);
}

function createRecipeUrl(title) {
    return `/recipes/index.html?recipe=${encodeURIComponent(title.toLowerCase().replace(/ /g, '-'))}`;
}

function averageRating(id) {
    const recipes = JSON.parse(localStorage.getItem("recipes"));

    if (!recipes) {
        console.error("No recipes found in localStorage.");
        return;
    }
    const recipe = recipes.find((recipe) => recipe.id === id);

    if (!recipe) {
        return;
    }

    const { userRatings } = recipe;

    if (!userRatings.length) {
        return 0;
    }

    const sum = userRatings.reduce((acc, rating) => acc + rating, 0);
    const average = sum / userRatings.length;

    return average.toFixed(2);
}


function bookmarkRecipeById(recipeId) {
  const bookmarkButton = document.querySelector(`.bookmark-button`);
  const bookmarkIcon = bookmarkButton.querySelector('i');

  let bookmarkedRecipes = JSON.parse(localStorage.getItem('bookmarkedRecipes')) || [];

  const isBookmarked = bookmarkedRecipes.some(bookmark => bookmark.id === recipeId);

  const updateBookmarks = (bookmarkedRecipes) => {
      localStorage.setItem('bookmarkedRecipes', JSON.stringify(bookmarkedRecipes));
  }

  const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
  const recipe = recipes.find(r => r.id === recipeId);

  if (recipe) {
      if (isBookmarked) {
          bookmarkedRecipes = bookmarkedRecipes.filter(bookmark => bookmark.id !== recipeId);
          bookmarkIcon.style.color = 'inherit';
      } else {
          bookmarkedRecipes.push(recipe);
      }

      updateBookmarks(bookmarkedRecipes);

      return !isBookmarked;
  }

  return false;
}

document.addEventListener('click', function(event) {
  if (event.target.closest('.bookmark-button')) {
      const bookmarkButton = event.target.closest('.bookmark-button');
      const recipeId = bookmarkButton.getAttribute('data-recipe-id');

      if (recipeId) {
          const isBookmarked = bookmarkRecipeById(recipeId);
          const icon = bookmarkButton.querySelector('i');

          if (isBookmarked) {
              icon.classList.add('ri-bookmark-fill');
              icon.classList.remove('ri-bookmark-line');
          } else {
              icon.classList.add('ri-bookmark-line');
              icon.classList.remove('ri-bookmark-fill');
          }
      }
  }
});