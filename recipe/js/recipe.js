const RecipeType = {
  VEG: 'veg',
  NONVEG: 'nonveg'
};

const predefinedRecipes = [
  {
    title: "Chicken Salad",
    ingredients: ["Chicken", "Lettuce", "Onion"],
    procedure: "Mix all ingredients and serve chilled.",
    image: "https://utfs.io/f/f38974ab-acea-4ead-b69e-b16e6688fbce-y2paxc.jpg",
    duration: "15 mins",
    userRatings: [],
    userReviews: [],
    bookmarked: true,
    type: RecipeType.NONVEG,
    category: "Trending"
  },
  {
    title: "Beef Tacos",
    ingredients: ["Beef", "Onion", "Pepper"],
    procedure: "Cook beef with onions and peppers, then serve in tortillas.",
    image: "https://utfs.io/f/cacaf931-013a-436a-b200-86e4d95ca4e3-8v2ckd.jpg",
    duration: "30 mins",
    userRatings: [],
    userReviews: [],
    bookmarked: true,
    type: RecipeType.NONVEG,
    category: "Trending"
  },
  {
    title: "Garlic Cheese Bread",
    ingredients: ["Cheese", "Garlic"],
    procedure: "Spread garlic and cheese on bread, then bake until golden.",
    image: "https://utfs.io/f/785d667a-b2a2-4b11-a98d-9b5717880db3-9peb4c.webp",
    duration: "10 mins",
    userRatings: [],
    userReviews: [],
    bookmarked: true,
    type: RecipeType.VEG,
    category: "Instant"
  },
  {
    title: "Tomato Basil Pasta",
    ingredients: ["Tomato", "Basil", "Pasta"],
    procedure: "Cook pasta, then mix with fresh tomatoes and basil.",
    image: "https://utfs.io/f/8e228882-e180-45ea-b6c5-ea0af57146a0-plwc4s.webp",
    duration: "20 mins",
    userRatings: [1, 2, 3, 4],
    userReviews: ["Good", "Bad"],
    category: "Globally",
    type: RecipeType.VEG
  },
  {
    title: "Butter Chicken",
    ingredients: ["Chicken", "Butter", "Tomato", "Cream", "Spices"],
    procedure: "Cook chicken in a rich, buttery, tomato-based sauce.",
    image: "https://utfs.io/f/50e26745-a1a0-41af-ab8e-053b36d47d37-m1cece.webp",
    duration: "45 mins",
    userRatings: [],
    userReviews: [],
    bookmarked: true,
    type: RecipeType.NONVEG,
    category: "Indian"
  },
  {
    title: "Chole Bhature",
    ingredients: ["Chickpeas", "Flour", "Spices", "Onion", "Tomato"],
    procedure: "Prepare spicy chickpeas and serve with deep-fried bread.",
    image: "https://utfs.io/f/ef5d3a52-1571-47bb-aaef-51c8d956149e-w0pn9j.webp",
    duration: "60 mins",
    userRatings: [],
    userReviews: [],
    bookmarked: true,
    type: RecipeType.VEG,
    category: "Indian"
  },
  {
    title: "Masala Dosa",
    ingredients: ["Rice", "Lentils", "Potato", "Onion", "Spices"],
    procedure: "Crispy rice crepe filled with spiced mashed potatoes.",
    image: "https://utfs.io/f/1bf99a7d-5ec6-41db-b40b-ac4934b24570-bc2kc0.jpg",
    duration: "40 mins",
    userRatings: [],
    userReviews: [],
    bookmarked: true,
    type: RecipeType.VEG,
    category: "Indian"
  },
  {
    title: "Paneer Tikka",
    ingredients: ["Paneer", "Yogurt", "Spices", "Bell Pepper"],
    procedure: "Marinated paneer cubes grilled with spices.",
    image: "https://utfs.io/f/80963ad8-bad8-4fce-89f1-dcb9cc69e175-q4lcve.jpg.webp",
    duration: "30 mins",
    userRatings: [],
    userReviews: [],
    bookmarked: true,
    type: RecipeType.VEG,
    category: "Indian"
  },
  {
    title: "Sushi Rolls",
    ingredients: ["Rice", "Nori", "Fish", "Vegetables"],
    procedure: "Roll rice and ingredients in seaweed, slice into pieces.",
    image: "https://utfs.io/f/9738ac45-694a-451a-b1f5-31cf374145cb-8oso72.webp",
    duration: "50 mins",
    userRatings: [],
    userReviews: [],
    bookmarked: true,
    type: RecipeType.NONVEG,
    category: "Globally"
  },
  {
    title: "Paella",
    ingredients: ["Rice", "Seafood", "Saffron", "Vegetables"],
    procedure: "Cook rice with seafood and saffron in a large skillet.",
    image: "https://utfs.io/f/6ec036f3-07ad-4b40-8ec8-61020c5d10a2-egd5cn.jpg",
    duration: "60 mins",
    userRatings: [],
    userReviews: [],
    bookmarked: true,
    type: RecipeType.NONVEG,
    category: "Globally"
  },
  {
    title: "Tacos al Pastor",
    ingredients: ["Pork", "Pineapple", "Onion", "Cilantro", "Tortillas"],
    procedure: "Marinate pork, cook with pineapple, and serve in tortillas.",
    image: "https://utfs.io/f/ad4f08a0-eaac-4a16-bc38-5a95725f5169-5rvzrv.webp",
    duration: "35 mins",
    userRatings: [],
    userReviews: [],
    bookmarked: true,
    type: RecipeType.NONVEG,
    category: "Globally"
  },
  {
    title: "Spaghetti Carbonara",
    ingredients: ["Spaghetti", "Eggs", "Pancetta", "Cheese", "Pepper"],
    procedure: "Mix hot pasta with eggs, cheese, and pancetta.",
    image: "https://utfs.io/f/0d07e398-e5b2-4e97-b5ee-00595cb4fb18-bhcf0l.webp",
    duration: "25 mins",
    userRatings: [],
    userReviews: [],
    bookmarked: true,
    type: RecipeType.NONVEG,
    category: "Globally"
  },
  {
    title: "Instant Noodles",
    ingredients: ["Noodles", "Seasoning", "Vegetables"],
    procedure: "Boil noodles with seasoning and add vegetables.",
    image: "https://utfs.io/f/87dab3db-b0ac-4ad4-8f90-76a5e09e0caf-9yq414.jpg",
    duration: "5 mins",
    userRatings: [],
    userReviews: [],
    bookmarked: true,
    type: RecipeType.VEG,
    category: "Instant"
  },
  {
    title: "Microwave Mug Cake",
    ingredients: ["Flour", "Sugar", "Cocoa", "Milk", "Oil"],
    procedure: "Mix ingredients in a mug and microwave for 2 minutes.",
    image: "https://utfs.io/f/f8e5f101-1342-4f85-9057-30021888239b-417lbd.jpg",
    duration: "2 mins",
    userRatings: [],
    userReviews: [],
    bookmarked: true,
    type: RecipeType.VEG,
    category: "Instant"
  },
  {
    title: "Avocado Toast",
    ingredients: ["Bread", "Avocado", "Salt", "Pepper"],
    procedure: "Mash avocado on toasted bread, season with salt and pepper.",
    image: "https://utfs.io/f/cdb1138d-7d0f-41de-b98f-297f5eba239e-mchq78.webp",
    duration: "10 mins",
    userRatings: [],
    userReviews: [],
    bookmarked: true,
    type: RecipeType.VEG,
    category: "Instant"
  },
  {
    title: "Smoothie Bowl",
    ingredients: ["Banana", "Berries", "Yogurt", "Granola"],
    procedure: "Blend fruits and yogurt, top with granola.",
    image: "https://utfs.io/f/7ff32ed1-7930-40e4-a178-8e8a896446e9-qofxea.jpg",
    duration: "5 mins",
    userRatings: [],
    userReviews: [],
    bookmarked: true,
    type: RecipeType.VEG,
    category: "Instant"
  },
  {
    title: "Mac and Cheese",
    ingredients: ["Pasta", "Cheese", "Milk", "Butter"],
    procedure: "Cook pasta, mix with cheese sauce, and serve hot.",
    image: "https://utfs.io/f/e846c986-a03c-4d3e-b422-9f03cbf96ca5-l1ijum.webp",
    duration: "20 mins",
    userRatings: [],
    userReviews: [],
    bookmarked: true,
    type: RecipeType.VEG,
    category: "Students' Favorite"
  },
  {
    title: "Ramen Noodles",
    ingredients: ["Ramen Noodles", "Egg", "Scallions", "Broth"],
    procedure: "Cook noodles in broth, add toppings like egg and scallions.",
    image: "https://utfs.io/f/2fcd62a5-bdd6-4a8e-b355-7750ee2e168d-7i0elp.jpg",
    duration: "10 mins",
    userRatings: [],
    userReviews: [],
    bookmarked: true,
    type: RecipeType.VEG,
    category: "Students' Favorite"
  },
  {
    title: "Grilled Cheese Sandwich",
    ingredients: ["Bread", "Cheese", "Butter"],
    procedure: "Butter bread, place cheese in between, and grill until golden.",
    image: "https://utfs.io/f/ff501993-8558-4c08-aaea-eed98b761c95-a50ae8.webp",
    duration: "10 mins",
    userRatings: [],
    userReviews: [],
    bookmarked: true,
    type: RecipeType.VEG,
    category: "Students' Favorite"
  },
  {
    title: "Burrito Bowl",
    ingredients: ["Rice", "Beans", "Chicken", "Salsa", "Avocado"],
    procedure: "Layer ingredients in a bowl and serve.",
    image: "https://utfs.io/f/ba4cd760-3d50-49ed-8f8d-3033b2c0a2f0-gqefoq.jpg",
    duration: "15 mins",
    userRatings: [],
    userReviews: [],
    bookmarked: true,
    type: RecipeType.NONVEG,
    category: "Students' Favorite"
  },
  //HOMEPAGE
  {
    title: "Litti Chokha",
    ingredients: ["Wheat Flour", "Ghee", "Ajwain ", "Sattu", "Mustard Oil"],
    procedure: "1. For Litti: Mix whole wheat flour, ghee, ajwain, and salt. Add water gradually and knead into a firm dough. Set aside.\n2. For Filling: Mix sattu, mustard oil, garlic, ginger, green chilies, pickle masala, salt, and lemon juice. Add water as needed to form a crumbly mixture.\n3. Divide the dough into equal parts. Flatten each part and fill with the sattu mixture. Seal and shape into balls.\n4. Preheat oven to 180°C (350°F). Bake the littis for 25-30 minutes or until golden brown. Alternatively, cook on an open flame or tandoor.\n5. For Chokha: Roast eggplant and tomatoes until charred. Peel and mash them with boiled potatoes, onions, garlic, green chilies, mustard oil, coriander leaves, and salt.\n6. Serve the littis with chokha, drizzled with ghee.",
    image: "../../assets/elem3-littichokha.png",
    duration: "1 hour 15 mins",
    userRatings: [],
    userReviews: [],
    bookmarked: false,
    type: "RecipeType.VEG",
    category: "Traditional Favorites"
  },
  {
    title: "2 Minute Maggi",
    ingredients: ["Maggi Noodles", "Water", "Maggi Tastemaker"],
    procedure: "1. Boil 1 1/2 cups of water in a pan.\n2. Add Maggi noodles and cook for 2 minutes.\n3. Add the Maggi Tastemaker and stir well.\n4. Cook for another minute or until the water is almost absorbed.\n5. Optional: Add vegetables, eggs, or cheese as desired. Mix well and serve hot.",
    image: "../../assets/elem2-maggie.png",
    duration: "5 mins",
    userRatings: [],
    userReviews: [],
    bookmarked: false,
    type: "RecipeType.VEG",
    category: "Quick Bites"
  },
  {
    title: "Chicken Biryani",
    ingredients: ["Chicken", "Basmati Rice ", "Onions", "Tomatoe", "Yogurt"],
    procedure: "1. Marinate the chicken with yogurt, ginger-garlic paste, turmeric powder, red chili powder, and salt. Let it sit for at least 30 minutes.\n2. Cook the basmati rice with whole spices until 70% done. Drain and set aside.\n3. In a heavy-bottomed pot, heat ghee and fry onions until golden brown. Add tomatoes and cook until soft.\n4. Add the marinated chicken and cook until the chicken is half done. Add biryani masala, green chilies, and salt to taste.\n5. Layer the partially cooked rice over the chicken. Sprinkle saffron milk, coriander, and mint leaves on top.\n6. Cover the pot and cook on low heat (dum) for 20-25 minutes.\n7. Garnish with fried onions and serve hot with raita.",
    image: "../../assets/elem1-biryani.png",
    duration: "1 hour 30 mins",
    userRatings: [],
    userReviews: [],
    bookmarked: false,
    type: "RecipeType.NON_VEG",
    category: "Traditional Favorites"
  },
  {
    title: "Mango Lassi",
    ingredients: ["Ripe Mangoes", "Yogurt", "Milk", "Sugar", "Cardamom Powder"],
    procedure: "1. In a blender, combine chopped mangoes, yogurt, milk, sugar, and cardamom powder.\n2. Blend until smooth and creamy.\n3. Add ice cubes and blend again.\n4. Pour into glasses and garnish with mint leaves.\n5. Serve chilled.",
    image: "https://utfs.io/f/4fdda402-2c14-483e-808c-cf0d6e5c6379-1153ai.jpg.webp",
    duration: "10 mins",
    userRatings: [],
    userReviews: [],
    bookmarked: false,
    type: "RecipeType.VEG",
    category: "Summer Coolers"
  },
  {
    title: "Iced Coffee",
    ingredients: ["Brewed Coffee", "Milk", "Ice Cubes ", "Sugar"],
    procedure: "1. Brew coffee and let it cool to room temperature.\n2. In a glass, add ice cubes.\n3. Pour the cooled coffee over the ice.\n4. Add milk, sugar, and vanilla extract. Stir well.\n5. Optional: Top with whipped cream.\n6. Serve immediately.",
    image: "https://utfs.io/f/0219580d-f973-41c1-a2af-7f1d63532c51-f8vh5n.webp",
    duration: "5 mins",
    userRatings: [],
    userReviews: [],
    bookmarked: false,
    type: "RecipeType.VEG",
    category: "Cold Beverages"
  },
  {
    title: "Masala Chai",
    ingredients: ["Water", "Milk", "Tea Leaves", "Ginger ", "Cardamom Pods"],
    procedure: "1. In a pot, bring water to a boil.\n2. Add crushed ginger, cardamom pods, cinnamon stick, cloves, and black peppercorns. Boil for 2-3 minutes.\n3. Add tea leaves and sugar. Boil for another 2 minutes.\n4. Pour in milk and bring to a boil.\n5. Reduce heat and simmer for 2-3 minutes.\n6. Strain the tea into cups and serve hot.",
    image: "https://utfs.io/f/1810ec88-35fb-4801-b71c-2da8414bc672-7w5r74.jpg.webp",
    duration: "15 mins",
    userRatings: [],
    userReviews: [],
    bookmarked: false,
    type: "RecipeType.VEG",
    category: "Hot Beverages"
  },
  {
    title: "Fresh Lemonade",
    ingredients: ["Lemons", "Water", "Sugar", "Ice Cubes"],
    procedure: "1. In a pitcher, combine fresh lemon juice and sugar. Stir until sugar dissolves.\n2. Add water and mix well.\n3. Refrigerate for at least 30 minutes.\n4. Serve over ice cubes in glasses.\n5. Garnish with mint leaves and lemon slices.\n6. Enjoy chilled.",
    image: "https://utfs.io/f/dfa8f7be-5025-4f16-9735-d0b729ba758f-ijyycu.webp",
    duration: "10 mins",
    userRatings: [],
    userReviews: [],
    bookmarked: false,
    type: "RecipeType.VEG",
    category: "Summer Coolers"
  }
];

function addUniqueIds(recipes) {
  return recipes.map((recipe, index) => ({
    ...recipe,
    id: `recipe-${index + 1}`
  }));
}

// New Recipe will directly save in localStorage...

function initializeLocalStorage() {
  if (!localStorage.getItem("recipes")) {
    const recipesWithIds = addUniqueIds(predefinedRecipes);
    localStorage.setItem("recipes", JSON.stringify(recipesWithIds));
  }
}

initializeLocalStorage();