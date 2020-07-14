// JS for Mobile Category Dropdown
var toggleBtn = '',
    targ = null,
    list = null;

document.addEventListener('DOMContentLoaded', (event) => {
    //the event occurred
    toggleBtn = document.querySelector('.category-mobile');
    targ = document.querySelector('.category-block');
    list = document.querySelector('.menu-list');
    var urlParams = new URLSearchParams(window.location.search);

    setTimeout(() => {
        if (urlParams.get('category') == null && toggleBtn) {
            toggleBtn.innerHTML = "Categories" + '<span class="caret"></span>';
        } else if (urlParams.get('category') != null && !toggleBtn) {
            toggleBtn.innerHTML = urlParams.get('category') + '<span class="caret"></span>';
        }

    }, 600);
})

function toggleMenu(e) {
    list.classList.toggle('disp');
    e.stopPropagation();
}

function toggleNav(e) {

    targ.classList.toggle('disp');
    e.stopPropagation();
}

function changeText(e, id, name) {
    toggleBtn.innerHTML = e.target.text;
    targ.classList.toggle('disp');
    location.href = "/product/" + id + "?category=" + name;
    e.stopPropagation();

}