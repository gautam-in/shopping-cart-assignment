document.querySelectorAll(":is(.flex-row.category, .flex-row-reverse.category) h1").forEach(el => el.setAttribute('tabindex', 0));
let nextButton = document.querySelector('.next');

nextButton.addEventListener('keypress', function (e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if (e.keyCode == 13) {
        moveSlide(1)
    }
})

