const addNewRecipe = document.getElementById("addNew");
const popupOverlay = document.getElementById("popupOverlay");
const popupForm = document.getElementById("popupForm");

addNewRecipe.addEventListener("click", () => {
  const token = localStorage.getItem('token');
  if (!token) {
    const attemptedUrl = window.location.href;
    localStorage.setItem('attemptedUrl', attemptedUrl);
    window.location.href = '/auth/login.html';
  } else {
    popupOverlay.style.display = "flex";
    popupForm.style.display = "flex";
  }
});

function closePopup() {
  popupOverlay.style.display = "none";
  popupForm.style.display = "none";
}

document.getElementById('popupForm').addEventListener('submit', function (event) {
  event.preventDefault();
  console.log("clicked");
  const title = document.getElementById('recipeForm-title').value;
  const ingredients = document.getElementById('recipeForm-ingredients').value.split(',');
  const procedure = document.getElementById('recipeForm-procedure').value.split(',');
  const image = document.getElementById('recipeForm-image').value;
  const duration = document.getElementById('recipeForm-duration').value;
  const category = document.getElementById('recipeForm-category').value;
  const type = document.getElementById('recipeForm-type').value;
  const bookmark = document.getElementById('recipeForm-bookmark').checked;

  const newRecipe = {
    id: Date.now(),
    title,
    ingredients: ingredients.map(ingredient => ingredient.trim()),
    procedure,
    image,
    duration,
    userRatings: [],
    userReviews: [],
    category,
    bookmark,
    type
  };

  let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
  recipes.push(newRecipe);

  localStorage.setItem('recipes', JSON.stringify(recipes));

  document.getElementById('popupForm').reset();

  alert('Recipe added successfully!');
  closePopup();
});

function previewImage() {
  const imageUrl = document.getElementById("recipeForm-image").value;
  const imagePreview = document.getElementById("imagePreview");
  console.log(imageUrl);

  if (imageUrl) {
    imagePreview.src = imageUrl;
    imagePreview.style.display = "flex";
  } else {
    imagePreview.src = "";
    imagePreview.style.display = "none";
  }
}
