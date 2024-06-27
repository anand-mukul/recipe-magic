const ingredientList = document.getElementById("ingredient-capsules");

function createIngredientCapsule(ingredient, container) {
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

  container.appendChild(ingredientDiv);
}

ingredients.forEach((ingredient) => createIngredientCapsule(ingredient, ingredientList));

function updatedSelectedIngredients(ingredientDivId, selected) {
  const sameIngredients = document.querySelectorAll(`#${ingredientDivId}`);

  sameIngredients.forEach((ingredient) => {
    if (selected) {
      if (!ingredient.classList.contains("selected")) {
        ingredient.classList.add("selected");
      }
    } else {
      if (ingredient.classList.contains("selected")) {
        ingredient.classList.remove("selected");
      }
    }
  });
}

function showMatchingRecipes() {
  const selectedIngredients = Array.from(document.querySelectorAll(".selected")).map(ingredient => ingredient.textContent);

  const recipes = JSON.parse(localStorage.getItem("recipes"));

  const sortedRecipes = recipes.map(recipe => {
    const ingredientPositions = selectedIngredients.map(ingredient => {
      const position = recipe.ingredients.indexOf(ingredient);
      return position === -1 ? Infinity : position;
    });
    return { recipe, ingredientPositions };
  }).sort((a, b) => {
    for (let i = 0; i < selectedIngredients.length; i++) {
      if (a.ingredientPositions[i] !== b.ingredientPositions[i]) {
        return a.ingredientPositions[i] - b.ingredientPositions[i];
      }
    }
    return 0;
  }).map(item => item.recipe);

  sortedRecipes.forEach((recipe) => createRecipeCard(recipe));
}