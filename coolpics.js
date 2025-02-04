// Select elements
const menuButton = document.querySelector(".menu");
const navigation = document.querySelector(".navigation");

// Function to toggle the menu
function toggleMenu() {
    navigation.classList.toggle("hide");
}

// Add event listener to menu button
menuButton.addEventListener("click", toggleMenu);

// Function to handle window resizing
function handleResize() {
    if (window.innerWidth > 1000) {
        navigation.classList.remove("hide"); // Ensure menu is shown
    } else {
        navigation.classList.add("hide"); // Hide menu when resizing down
    }
}

// Call handleResize on page load and on window resize
handleResize();
window.addEventListener("resize", handleResize);

// Function to generate modal HTML
function viewerTemplate(pic, alt) {
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
    </div>`;
}

// Function to handle image click event
function viewHandler(event) {
    if (event.target.tagName === "IMG") {
        const imgSrc = event.target.src;
        const imgParts = imgSrc.split("-"); // Split image filename
        const fullImgSrc = imgParts[0] + "-full.jpeg"; // Construct full image path
        
        // Insert viewer modal into body
        document.body.insertAdjacentHTML("afterbegin", viewerTemplate(fullImgSrc, event.target.alt));
        
        // Add event listener to close button
        document.querySelector(".close-viewer").addEventListener("click", closeViewer);
    }
}

// Function to close the image viewer
function closeViewer() {
    document.querySelector(".viewer").remove();
}

// Add event listener to gallery section
document.querySelector(".gallery").addEventListener("click", viewHandler);
