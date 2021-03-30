document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById("loginForm");
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity()) {
            window.location = 'index.html';
        }
        form.classList.add('was-validated');
    });

}, false);
