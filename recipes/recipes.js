// Recipe Data (Example)
const Recipes = [
    {
        name: "Chocolate Chip Cookies",
        image: "images/chocolate-chip-cookies.jpg",
        rating: 4,
        description: "A classic and delicious cookie recipe.",
        ingredients: ["1 cup flour", "1/2 cup sugar", "1/4 cup butter"],
        instructions: "Mix ingredients, bake, enjoy!"
    },
    {
        name: "Spaghetti Bolognese",
        image: "images/spaghetti-bolognese.jpg",
        rating: 5,
        description: "A hearty and flavorful Italian pasta dish.",
        ingredients: ["Pasta", "Ground beef", "Tomato sauce"],
        instructions: "Cook pasta, brown beef, add sauce, serve."
    },
    {
        name: "Avocado Toast",
        image: "images/avocado-toast.jpg",
        rating: 3,
        description: "A simple and healthy breakfast or snack.",
        ingredients: ["Bread", "Avocado", "Salt", "Pepper"],
        instructions: "Toast bread, mash avocado, season, enjoy!"
    }
];

// Function to Render Recipes
function renderRecipes(recipes) {
    const container = document.getElementById("recipes-container");
    container.innerHTML = ""; // Clear existing content

    recipes.forEach(recipe => {
        const recipeDiv = document.createElement("div");
        recipeDiv.classList.add("recipe");

        const image = document.createElement("img");
        image.src = recipe.image;
        image.alt = recipe.name;

        const name = document.createElement("h2");
        name.textContent = recipe.name;

        const rating = createRating(recipe.rating);

        const description = document.createElement("p");
        description.textContent = recipe.description;

        recipeDiv.appendChild(image);
        recipeDiv.appendChild(name);
        recipeDiv.appendChild(rating);
        recipeDiv.appendChild(description);

        container.appendChild(recipeDiv);
    });
}

// Function to Create Rating Stars
function createRating(ratingValue) {
    const ratingSpan = document.createElement("span");
    ratingSpan.classList.add("rating");
    ratingSpan.setAttribute("role", "img");
    ratingSpan.setAttribute("aria-label", `Rating: ${ratingValue} out of 5 stars`);

    for (let i = 1; i <= 5; i++) {
        const star = document.createElement("span");
        star.setAttribute("aria-hidden", "true");
        if (i <= ratingValue) {
            star.classList.add("icon-star");
            star.textContent = "⭐";
        } else {
            star.classList.add("icon-star-empty");
            star.textContent = "☆";
        }
        ratingSpan.appendChild(star);
    }
    return ratingSpan;
}

// Function to Handle Search
function handleSearch(event) {
    event.preventDefault(); // Prevent form submission

    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(searchInput)
    );
    renderRecipes(filteredRecipes);
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
    renderRecipes(recipes); // Initial render
    document.getElementById("search-form").addEventListener("submit", handleSearch);
});

// recipes.js (Create this file with your recipe data)
const recipes = [
    {
      name: "Apple Crisp",
      tags: ["Dessert", "Fruit"],
      rating: 4,
      description: "This apple crisp recipe is a simple yet delicious fall dessert that's great served warm with vanilla ice cream.",
      image: "images/apple-crisp.jpg",
      ingredients: ["apples", "oats", "sugar", "butter", "cinnamon"]
    },
    {
      name: "Chocolate Chip Cookies",
      tags: ["Dessert", "Cookies"],
      rating: 5,
      description: "Classic chocolate chip cookies that are soft and chewy.",
      image: "images/chocolate-chip-cookies.jpg",
      ingredients: ["flour", "sugar", "chocolate chips", "butter", "eggs"]
    },
    {
      name: "Spaghetti Bolognese",
      tags: ["Main Course", "Italian"],
      rating: 3,
      description: "A hearty and flavorful spaghetti bolognese recipe.",
      image: "images/spaghetti-bolognese.jpg",
      ingredients: ["spaghetti", "ground beef", "tomatoes", "onions", "garlic"]
    },
    // Add more recipes here...
  ];
  
  // script.js
  function random(num) {
    return Math.floor(Math.random() * num);
  }
  
  function getRandomListEntry(list) {
    const listLength = list.length;
    const randomNum = random(listLength);
    return list[randomNum];
  }
  
  function tagsTemplate(tags) {
    let html = "";
    tags.forEach(tag => {
      html += `<li>${tag}</li>`;
    });
    return html;
  }
  
  function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
      } else {
        html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
      }
    }
    html += `</span>`;
    return html;
  }
  
  function recipeTemplate(recipe) {
    return `<figure class="recipe">
      <img src="${recipe.image}" alt="image of ${recipe.name}" />
      <figcaption>
        <ul class="recipe__tags">
          ${tagsTemplate(recipe.tags)}
        </ul>
        <h2><a href="#">${recipe.name}</a></h2>
        <p class="recipe__ratings">
          ${ratingTemplate(recipe.rating)}
        </p>
        <p class="recipe__description">
          ${recipe.description}
        </p>
      </figcaption>
    </figure>`;
  }
  
  function renderRecipes(recipeList) {
    const recipeContainer = document.querySelector(".recipe-container");
    const htmlStrings = recipeList.map(recipe => recipeTemplate(recipe));
    recipeContainer.innerHTML = htmlStrings.join("");
  }
  
  function init() {
    const recipe = getRandomListEntry(recipes);
    renderRecipes([recipe]);
  }
  
  init();
  
  function filterRecipes(query) {
    const filtered = recipes.filter(recipe => {
      const name = recipe.name.toLowerCase().includes(query);
      const description = recipe.description.toLowerCase().includes(query);
      const tags = recipe.tags.find(tag => tag.toLowerCase().includes(query));
      const ingredients = recipe.ingredients.find(ingredient => ingredient.toLowerCase().includes(query));
      return name || description || tags || ingredients;
    });
  
    const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));
    return sorted;
  }
  
  function searchHandler(e) {
    e.preventDefault();
    const searchInput = document.querySelector("#search-input");
    const query = searchInput.value.toLowerCase();
    const filteredRecipes = filterRecipes(query);
    renderRecipes(filteredRecipes);
  }
  
  const searchButton = document.querySelector("#search-button");
  searchButton.addEventListener("click", searchHandler);