// FAQ Toggle functionality
document.querySelectorAll('.faq-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        const isVisible = answer.style.display === 'block';

        if (isVisible) {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});
const mybox= document.getElementById("mybox");
function givealert(event){
    alert("your problem has been raised we will contact u shortly");
}
mybox.addEventListener("click",givealert)
// Form Submission functionality (for demonstration purposes)
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Simulating form submission (validation, AJAX, etc.)
    const formMessage = document.getElementById('form-message');

    formMessage.innerHTML = 'Thank you for contacting us. We will get back to you shortly!';
    formMessage.style.display = 'block';

    // Clear form fields
    this.reset();
});
