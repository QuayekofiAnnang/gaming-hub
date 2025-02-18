document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Here you would typically send the form data to your server
        // For now, we'll just log it to the console
        console.log('Form submitted:', formData);

        // Reset form
        contactForm.reset();

        // Show success message (you can customize this)
        alert('Message sent successfully!');
    });
});
