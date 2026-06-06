var recipeSection = document.getElementById("recipeSection");

var recipes = [
  {
    level: "Easy",
    cuisine: "American",
    name: "BBQ Pulled Pork",
    description: "Slow-cooked tender pork in smoky barbecue sauce",
    image: "./images/photo-1529692236671-f1f6cf9683ba.jfif",
    rating: 4.7,
    reviewsCount: 412,
    prepTime: 15,
    cookTime: 240,
    servings: 4,

    ingredients: [
      "1kg pork shoulder",
      "1 cup BBQ sauce",
      "1/2 cup apple cider vinegar",
      "2 tablespoons brown sugar",
      "1 tablespoon paprika",
      "1 tablespoon garlic powder",
      "Burger buns",
      "Coleslaw for serving",
    ],

    instructions: [
      "Mix paprika, garlic powder, brown sugar, salt and pepper. Rub all over pork shoulder.",
      "Place pork in slow cooker with apple cider vinegar and 1/2 cup water.",
      "Cook on low for 8 hours or high for 4 hours until meat is very tender.",
      "Remove pork and shred with two forks. Discard excess fat.",
      "Return shredded pork to slow cooker, mix with BBQ sauce.",
      "Serve on toasted buns with coleslaw on top.",
    ],

    nutrition: {
      calories: "620 kcal",
      protein: "48g",
      carbohydrates: "52g",
      fat: "22g",
      fiber: "3g",
      sodium: "1180mg",
    },

    tips: [
      "Use pork shoulder for best results - it stays moist",
      "Let pork rest before shredding for juicier meat",
      "Make your own BBQ sauce for better flavor",
      "Leftovers freeze well for up to 3 months",
    ],
  },

  {
    level: "Easy",
    cuisine: "Asian",
    name: "Chicken Stir-Fry",
    description: "Quick and healthy stir-fry with colorful vegetables",
    image: "./images/Stir-Fry.jfif",
    rating: 4.5,
    reviewsCount: 324,
    prepTime: 15,
    cookTime: 15,
    servings: 4,

    ingredients: [
      "500g chicken breast, sliced",
      "2 bell peppers, sliced",
      "1 broccoli head, florets",
      "2 carrots, julienned",
      "3 tablespoons soy sauce",
      "2 tablespoons oyster sauce",
      "1 tablespoon sesame oil",
      "2 cloves garlic, minced",
      "Fresh ginger, grated",
    ],

    instructions: [
      "Mix soy sauce, oyster sauce, and sesame oil for the sauce.",
      "Heat wok over high heat with oil. Cook chicken until golden, remove and set aside.",
      "Add more oil if needed. Stir-fry garlic and ginger for 30 seconds.",
      "Add vegetables, starting with hardest ones (carrots, broccoli). Cook for 3-4 minutes.",
      "Return chicken to wok, add bell peppers and sauce. Toss for 2 minutes.",
      "Serve immediately over steamed rice or noodles.",
    ],

    nutrition: {
      calories: "320 kcal",
      protein: "34g",
      carbohydrates: "18g",
      fat: "12g",
      fiber: "5g",
      sodium: "840mg",
    },

    tips: [
      "Cut all ingredients before starting to cook",
      "Keep heat high for authentic stir-fry texture",
      "Don't overcrowd the wok or vegetables will steam",
      "Add cashews or peanuts for extra crunch",
    ],
  },

  {
    level: "Easy",
    cuisine: "Asian",
    name: "Vegetable Curry",
    description: "Hearty vegetarian curry with coconut milk",
    image: "./images/Vegetable.jfif",
    rating: 4.6,
    reviewsCount: 289,
    prepTime: 20,
    cookTime: 30,
    servings: 4,

    ingredients: [
      "2 potatoes, cubed",
      "1 cauliflower, florets",
      "2 carrots, sliced",
      "1 can chickpeas",
      "400ml coconut milk",
      "3 tablespoons curry powder",
      "1 onion, diced",
      "3 cloves garlic, minced",
      "Fresh spinach",
    ],

    instructions: [
      "Heat oil in a large pot. Sauté onion until soft, add garlic and curry powder, cook for 1 minute.",
      "Add potatoes and carrots, cook for 5 minutes.",
      "Pour in coconut milk and 1 cup water. Bring to simmer.",
      "Add cauliflower and chickpeas. Cook for 20 minutes until vegetables are tender.",
      "Stir in fresh spinach and cook until wilted.",
      "Serve hot over basmati rice or with naan bread.",
    ],

    nutrition: {
      calories: "380 kcal",
      protein: "14g",
      carbohydrates: "48g",
      fat: "16g",
      fiber: "12g",
      sodium: "480mg",
    },

    tips: [
      "Add vegetables in order of cooking time needed",
      "Adjust curry powder amount to taste",
      "Use full-fat coconut milk for creamier curry",
      "Add protein like tofu or paneer if desired",
    ],
  },

  {
    level: "Easy",
    cuisine: "Seafood",
    name: "Shrimp Scampi",
    description: "Garlicky shrimp in white wine butter sauce",
    image: "./images/Shrimp-Scampi.jfif",
    rating: 4.8,
    reviewsCount: 356,
    prepTime: 10,
    cookTime: 15,
    servings: 2,

    ingredients: [
      "400g large shrimp, peeled",
      "300g linguine pasta",
      "6 cloves garlic, minced",
      "1/2 cup white wine",
      "4 tablespoons butter",
      "2 tablespoons olive oil",
      "Fresh parsley, chopped",
      "Lemon juice and zest",
      "Red pepper flakes",
    ],

    instructions: [
      "Cook linguine according to package directions. Reserve 1 cup pasta water.",
      "Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes, cook for 1 minute.",
      "Add shrimp, cook until pink on both sides, about 3-4 minutes. Remove and set aside.",
      "Add white wine to pan, simmer for 2 minutes. Add remaining butter and lemon juice.",
      "Return shrimp to pan, add cooked pasta and toss. Add pasta water if needed.",
      "Garnish with parsley, lemon zest, and serve immediately.",
    ],

    nutrition: {
      calories: "520 kcal",
      protein: "36g",
      carbohydrates: "54g",
      fat: "18g",
      fiber: "3g",
      sodium: "620mg",
    },

    tips: [
      "Don't overcook shrimp - they cook very quickly",
      "Use good quality white wine for best flavor",
      "Toss pasta in sauce for maximum flavor absorption",
      "Add extra lemon for bright, fresh taste",
    ],
  },

  {
    level: "Easy",
    cuisine: "Mediterranean",
    name: "Caesar Salad",
    description: "Classic salad with crispy romaine and creamy dressing",
    image: "./images/Caesar-Salad.jfif",
    rating: 4.4,
    reviewsCount: 198,
    prepTime: 15,
    cookTime: 0,
    servings: 2,

    ingredients: [
      "1 large romaine lettuce",
      "1/2 cup Caesar dressing",
      "1/2 cup parmesan cheese, shaved",
      "1 cup croutons",
      "2 anchovy fillets (optional)",
      "Lemon wedges",
      "Black pepper",
    ],

    instructions: [
      "Wash and dry romaine lettuce thoroughly. Tear into bite-sized pieces.",
      "Place lettuce in a large salad bowl.",
      "Add Caesar dressing and toss until evenly coated.",
      "Add croutons and half the parmesan cheese. Toss gently.",
      "Top with remaining parmesan shavings and anchovies if using.",
      "Serve immediately with lemon wedges and fresh black pepper.",
    ],

    nutrition: {
      calories: "320 kcal",
      protein: "12g",
      carbohydrates: "18g",
      fat: "22g",
      fiber: "3g",
      sodium: "680mg",
    },

    tips: [
      "Use cold, crisp lettuce for best texture",
      "Make homemade croutons for better flavor",
      "Add grilled chicken for a complete meal",
      "Don't dress salad until ready to serve",
    ],
  },

  {
    level: "Easy",
    cuisine: "American",
    name: "Classic Beef Burger",
    description: "Juicy homemade burger with all the fixings",
    image: "./images/Classic-Beef-Burger.jfif",
    rating: 4.6,
    reviewsCount: 421,
    prepTime: 15,
    cookTime: 20,
    servings: 4,

    ingredients: [
      "500g ground beef (80/20)",
      "4 burger buns",
      "4 slices cheddar cheese",
      "Lettuce leaves",
      "Tomato slices",
      "Red onion, sliced",
      "Pickles",
      "Burger sauce or condiments",
    ],

    instructions: [
      "Divide ground beef into 4 equal portions. Form into patties, making a small indent in the center.",
      "Season patties generously with salt and pepper on both sides.",
      "Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium.",
      "Add cheese slices in the last minute of cooking and cover to melt.",
      "Toast burger buns lightly on the grill or in a pan.",
      "Assemble burgers with lettuce, tomato, onion, pickles, and your favorite sauce.",
    ],

    nutrition: {
      calories: "650 kcal",
      protein: "38g",
      carbohydrates: "42g",
      fat: "35g",
      fiber: "2g",
      sodium: "920mg",
    },

    tips: [
      "Don't press down on burgers while cooking - keeps them juicy",
      "Make indent in center to prevent burger from puffing up",
      "Let patties rest for 2-3 minutes before serving",
      "Toast buns for better texture and flavor",
    ],
  },
];

var lastIndex = -1;
var addElement = [];

function getRandomRecipe() {
  if (addElement.length === recipes.length) {
    addElement = [];
  }

  var randomArray;
  do {
    randomArray = Math.floor(Math.random() * recipes.length);
  } while (randomArray === lastIndex || addElement.includes(randomArray));

  lastIndex = randomArray;
  addElement.push(lastIndex);

  console.log(addElement);
  var randomRecipe = recipes[randomArray];

  displayRecipe(randomRecipe);
}

function addAlert(recipe) {
  var alertCartoona = "";
  if (recipe.cookTime >= 30) {
    alertCartoona = `
                   <div class="alert-card mb-4 p-3 d-flex align-items-center gap-3">
                <div class="alert-icon">
                  <i class="fa-solid fa-triangle-exclamation"></i>
                </div>

                <div class="alert-content">
                  <p class="text-danger fw-bold">Extended Preparation Time</p>
                  <span class="small">
                    This recipe requires more than 45 minutes to prepare. Plan
                    accordingly!
                  </span>
                </div>
              </div>
`;
  } else {
    alertCartoona = `
                   <div class="d-block">
              </div>
`;
  }

  return alertCartoona;
}

function displayRecipe(recipe) {
  var crtoona = "";
  var ingredientCrtoona = "";
  for (var x = 0; x < recipe.ingredients.length; x++) {
    ingredientCrtoona += `
      <li><span>${x + 1}</span>${recipe.ingredients[x]}</li>
    `;
  }

  var instructionsCrtoona = "";
  for (var n = 0; n < recipe.instructions.length; n++) {
    instructionsCrtoona += `
      <div class="step">
        <span>${n + 1}</span>
        <p>${recipe.instructions[n]}</p>
      </div>
    `;
  }

  var tipsCrtoona = "";
  for (var t = 0; t < recipe.tips.length; t++) {
    tipsCrtoona += `
      <div>
        <i class="fa-solid fa-circle-check me-2"></i>
        <p>${recipe.tips[t]}</p>
      </div>
    `;
  }

  var alertCartoona = addAlert(recipe);

  crtoona = `
   <div class="container g-0">
          <div class="row bg-white gx-0 overflow-hidden ">
            <div class="col-12 col-lg-4 position-relative ">
              <img
                src="${recipe.image}"
                alt="${recipe.name}"
                class="w-100 h-100"
              />

              <div
                class="position-absolute top-0 start-0 m-3 d-flex align-items-center gap-2 py-2 px-3 bg-white rounded-5"
              >
                <i class="fa-solid fa-star text-warning"></i>
                <span class="fw-bold">${recipe.rating}</span>
                <span class="text-muted small">(${recipe.reviewsCount} reviews)</span>
              </div>

              <div class="position-absolute bottom-0 start-0 end-0 p-3">
                <div class="bg-white rounded shadow p-3 p-md-4">
                  <div class="row text-center">
                    <div class="col-4">
                      <i class="fa-solid fa-clock fs-4 text-warning"></i>
                      <p class="small text-muted">Prep Time</p>
                      <p class="fw-bold mb-0">${recipe.prepTime} min</p>
                    </div>
                    <div class="col-4">
                      <i
                        class="fa-solid fa-fire-burner fs-4 text-danger"
                      ></i>
                      <p class="small text-muted">Cook Time</p>
                      <p class="fw-bold mb-0">${recipe.cookTime} min</p>
                    </div>
                    <div class="col-4">
                      <i class="fa-solid fa-users fs-4 text-primary"></i>
                      <p class="small text-muted">Servings</p>
                      <p class="fw-bold mb-0">${recipe.servings} people</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="content col-12 col-lg-8 d-flex flex-column">
              <div
                class="d-flex justify-content-between flex-wrap gap-3 align-items-center mb-4"
              >
                <div>
                  <div class="food-cuisine d-flex gap-2">
                    <span class="fw-bold">${recipe.level}</span>
                    <span class="fw-bold">${recipe.cuisine}</span>
                  </div>

                  <h3 class="mb-2">${recipe.name}</h3>

                  <p class="food-description">
                    ${recipe.description}</p>
                </div>

                <div class="food-actions d-flex gap-2">
                  <button><i class="fa-solid fa-bookmark"></i></button>
                  <button><i class="fa-solid fa-share-nodes"></i></button>
                </div>
              </div>


              <div>
               ${alertCartoona}
               </div>
                <nav>
          <div class="nav nav-tabs row text-center" id="nav-tab" role="tablist">
            <button
              class="nav-link active col-6 col-lg-3"
              data-bs-toggle="tab"
              data-bs-target="#nav-ingredients"
              type="button"
            >
              <i class="fa-solid fa-list-check me-1"></i> 
              <span>Ingredients</span>
            </button>
            <button
              class="nav-link col-6 col-lg-3"
              data-bs-toggle="tab"
              data-bs-target="#nav-instructions"
              type="button"
            >
              <i class="fa-solid fa-book-open me-1"></i> 
              <span>Instructions</span>
            </button>
            <button
              class="nav-link col-6 col-lg-3"
              data-bs-toggle="tab"
              data-bs-target="#nav-nutrition"
              type="button"
            >
              <i class="fa-solid fa-chart-pie me-1"></i> 
              <span>Nutrition</span>
            </button>
            <button
              class="nav-link col-6 col-lg-3"
              data-bs-toggle="tab"
              data-bs-target="#nav-tips"
              type="button"
            >
              <i class="fa-solid fa-lightbulb me-1"></i> 
              <span>Chef's Tips</span>
            </button>
          </div>
        </nav>
           
              <div class="tab-content pt-3">
                <div class="tab-pane fade show active" id="nav-ingredients">
                  <div class="ingredients-box p-4">
                    <ul>
                     ${ingredientCrtoona}
                    </ul>
                  </div>
                </div>

                <div class="tab-pane fade" id="nav-instructions">
                  <div class="instructions-box">
                   ${instructionsCrtoona}
                  </div>
                </div>

                <div class="tab-pane fade" id="nav-nutrition">
                  <div class="nutrition-box">
                    <div class="row g-3">
                      <div class="col-12 col-lg-6">
                        <div
                          class="nutrition-item p-3 d-flex justify-content-between align-items-center"
                        >
                          <div class="nutrition-icon d-flex align-items-center">
                            <div>
                              <i class="fa-solid fa-fire"></i>
                            </div>
                            <span>Calories</span>
                          </div>
                          <div>
                            <span class="fs-5 fw-bold">${recipe.nutrition.calories}</span>
                          </div>
                        </div>
                      </div>

                      <div class="col-12 col-lg-6">
                        <div
                          class="nutrition-item p-3 d-flex justify-content-between align-items-center"
                        >
                          <div class="nutrition-icon d-flex align-items-center">
                            <div class="blue">
                              <i class="fa-solid fa-dumbbell text-primary"></i>
                            </div>
                            <span>Protein</span>
                          </div>
                          <div>
                            <span class="fs-5 fw-bold">${recipe.nutrition.protein}</span>
                          </div>
                        </div>
                      </div>

                      <div class="col-12 col-lg-6">
                        <div
                          class="nutrition-item p-3 d-flex justify-content-between align-items-center"
                        >
                          <div class="nutrition-icon d-flex align-items-center">
                            <div class="yellow">
                              <i class="fa-solid fa-wheat-awn text-warning"></i>
                            </div>
                            <span>Carbohydrates</span>
                          </div>
                          <div>
                            <span class="fs-5 fw-bold">${recipe.nutrition.carbohydrates}</span>
                          </div>
                        </div>
                      </div>

                      <div class="col-12 col-lg-6">
                        <div
                          class="nutrition-item p-3 d-flex justify-content-between align-items-center"
                        >
                          <div class="nutrition-icon d-flex align-items-center">
                            <div class="red">
                              <i class="fa-solid fa-droplet text-danger"></i>
                            </div>
                            <span>Fat</span>
                          </div>
                          <div>
                            <span class="fs-5 fw-bold">${recipe.nutrition.fat}</span>
                          </div>
                        </div>
                      </div>

                      <div class="col-12 col-lg-6">
                        <div
                          class="nutrition-item p-3 d-flex justify-content-between align-items-center"
                        >
                          <div class="nutrition-icon d-flex align-items-center">
                            <div class="green">
                              <i class="fa-solid fa-seedling text-success"></i>
                            </div>
                            <span>Fiber</span>
                          </div>
                          <div>
                            <span class="fs-5 fw-bold">${recipe.nutrition.fiber}</span>
                          </div>
                        </div>
                      </div>

                      <div class="col-12 col-lg-6">
                        <div
                          class="nutrition-item p-3 d-flex justify-content-between align-items-center"
                        >
                          <div class="nutrition-icon d-flex align-items-center">
                            <div class="pink">
                              <i class="fa-solid fa-cube"></i>
                            </div>
                            <span>Sodium</span>
                          </div>
                          <div>
                            <span class="fs-5 fw-bold">${recipe.nutrition.sodium}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="tab-pane fade" id="nav-tips">
                   <div class="tips-box d-flex flex-column gap-3 p-4">
                  
                     ${tipsCrtoona}
                   
                    
                  </div>
                </div>
              </div>

              <div class="try-btn">
                <button onclick="getRandomRecipe()">
                  <i class="fa-solid fa-rotate me-2"></i>Try Another Recipe
                </button>
              </div>
            </div>
          </div>
        </div>
  `;

  recipeSection.innerHTML = crtoona;
}

getRandomRecipe();