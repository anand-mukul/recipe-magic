const allIngredientsArrays = predefinedRecipes.map(recipe => recipe.ingredients);

const allIngredients = allIngredientsArrays.flat();

const ingredients = [...new Set(allIngredients)];
