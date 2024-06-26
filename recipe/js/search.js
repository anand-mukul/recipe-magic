const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const searchResult = document.getElementById("search-result");

let searchTimeout;


  searchInput.addEventListener("input", searchQuery);

function searchQuery(input) {
  const query = input.target.value;
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    searchIngredients(query);
  }, 300);
}

function searchIngredients(query) {
  searchResult.innerHTML = "";

  if (query) {
    const filteredIngredients = ingredients.filter((ingredient) =>
      ingredient.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredIngredients.length > 0) {
      const limitedIngredients = filteredIngredients.slice(0, 4);
      limitedIngredients.forEach((ingredient) =>
        createSearchResultCapsule(ingredient, query)
      );

      if (filteredIngredients.length > 4) {
        const moreButton = document.createElement("button");
        moreButton.className = "ingredient-capsule";
        moreButton.textContent = "More results";
        moreButton.addEventListener("click", () => {
          searchResult.innerHTML = "";
          filteredIngredients.forEach((ingredient) =>
            createSearchResultCapsule(ingredient, query)
          );
        });
        searchResult.appendChild(moreButton);
      }
    } else {
      searchResult.innerHTML =
        "<p>No ingredients found matching your search. Please try another query!</p>";
    }
  }
}

function createSearchResultCapsule(ingredient, query) {
  const ingredientDiv = document.createElement("div");
  ingredientDiv.className = "ingredient-capsule";
  ingredientDiv.textContent = ingredient;
  ingredientDiv.id = ingredient;

  ingredientDiv.addEventListener("click", () => {
    ingredientDiv.classList.toggle("selected");
    const selected = ingredientDiv.classList.contains("selected");
    const ingredientDivId = ingredientDiv.id;
    updatedSelectedIngredients(ingredientDivId, selected);
  });

  searchResult.appendChild(ingredientDiv);
}

searchButton.addEventListener("click", showMatchingRecipes);