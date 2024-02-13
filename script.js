document.addEventListener('DOMContentLoaded', function() {
    // Welcome message in the console
    console.log('Welcome to Sage\'s Professional Website!');

    // Function to handle form submission
    function handleFormSubmission(event) {
        event.preventDefault(); // Prevents the default form submission behavior

        // Retrieve form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        // Perform validation and further processing as needed

        // Display a thank you message
        alert(`Thank you, ${name}! We'll get in touch with you at ${email}.`);
    }

    // Attach the form submission function to the form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmission);
    }

    // Display the current date in the footer
    const currentDate = new Date();
    const footerDateElement = document.getElementById('footer-date');
    if (footerDateElement) {
        footerDateElement.textContent = `© ${currentDate.getFullYear()} Sage - Web Developer`;
    }

    // Add more JavaScript interactions or functionality here as needed
    //
});
  
