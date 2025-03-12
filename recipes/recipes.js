// Recipe Data (Example)
const recipes = [
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