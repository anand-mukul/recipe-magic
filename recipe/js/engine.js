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

// const addNewRecipe = document.getElementById("addNew");
// const popupOverlay = document.getElementById("popupOverlay");
// const popupForm = document.getElementById("popupForm");

// addNewRecipe.addEventListener("click", () => {
//   popupOverlay.style.display = "flex";
//   popupForm.style.display = "flex";
// });

// function closePopup() {
//   popupOverlay.style.display = "none";
//   popupForm.style.display = "none";
// }

// Function to handle form submission
// document.getElementById('popupForm-body').addEventListener('submit', function(event) {
//   event.preventDefault();
//  console.log("clicked")
//   const title = document.getElementById('recipeForm-title').value;
//   const ingredients = document.getElementById('recipeForm-ingredients').value.split(',');
//   const procedure = document.getElementById('recipeForm-procedure').value.split(',');
//   const image = document.getElementById('recipeForm-image').value;
//   const duration = document.getElementById('recipeForm-duration').value;
//   const category = document.getElementById('recipeForm-category').value;
//   const type = document.getElementById('recipeForm-type').value;
//   const bookmark = document.getElementById('recipeForm-bookmark').checked;

//   const newRecipe = {
//     id: Date.now(),
//     title,
//     ingredients: ingredients.map(ingredient => ingredient.trim()),
//     procedure,
//     image,
//     duration,
//     userRatings: [],
//     userReviews: [],
//     category,
//     bookmark,
//     type
//   };

//   let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
//   recipes.push(newRecipe);

//   localStorage.setItem('recipes', JSON.stringify(recipes));

//   document.getElementById('popupForm-body').reset();

//   alert('Recipe added successfully!');
//   closePopup();
// });

// function previewImage() {
//   const imageUrl = document.getElementById("recipeForm-image").value;
//   const imagePreview = document.getElementById("imagePreview");
//   console.log(imageUrl)
  
//   if (imageUrl) {
//     imagePreview.src = imageUrl;
//     imagePreview.style.display = "flex"; 
//   } else {
//     imagePreview.src = "";
//     imagePreview.style.display = "none"; 
//   }
// }