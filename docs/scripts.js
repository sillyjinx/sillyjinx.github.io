// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Add logic to handle the form submission, e.g., sending data to your server
        // For now, let's just log the form data to the console
        const formData = new FormData(contactForm);
        for (const pair of formData.entries()) {
            console.log(`${pair[0]}: ${pair[1]}`);
        }

        // You can add AJAX or fetch API to send form data to your server
    });
});
