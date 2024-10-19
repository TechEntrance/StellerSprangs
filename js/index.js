// Add event listener to the navigation menu
document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector("nav");
    nav.addEventListener("click", function(event) {
        if (event.target.tagName === "A") {
            event.preventDefault();
            const href = event.target.getAttribute("href");
            document.querySelector(href).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Add event listener to the hero section button
document.addEventListener("DOMContentLoaded", function() {
    const heroBtn = document.querySelector(".hero .btn");
    heroBtn.addEventListener("click", function() {
        // Add your JavaScript code here to handle the button click event
    });
});

// Add event listener to the contact form submit button
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector(".contact form");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        // Add your JavaScript code here to handle the form submission
    });
});