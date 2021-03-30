document.addEventListener('DOMContentLoaded', function () {
    const form = (document.getElementById("registerForm"));
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        event.stopPropagation();
        console.log("e.target.elements", event.target.elements)
        const { password, confirmPassword } = event.target.elements;
        if (password.value !== confirmPassword.value) {
            console.log(confirmPassword, event)
            confirmPassword.setCustomValidity("Confirm Password does not match password")
        } else {
            confirmPassword.setCustomValidity("")
        }
        if (form.checkValidity()) {
            window.location = 'index.html';
        }
        form.classList.add('was-validated');
    });
}, false);
