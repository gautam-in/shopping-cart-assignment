console.log("Script loaded!");

const navbarMenuToggleButton = document.querySelector('.menu-icon')

window.onload = function () {
  document.getElementById("shopping-cart-image").classList.remove("fa-3x");
};


window.addEventListener("resize", function () {
  if (window.innerWidth < 700) {
    document.getElementById("shopping-cart-image").classList.add("fa-3x");
    document.getElementById("shopping-cart-image").classList.remove("fa-lg");
  }
  if (window.innerWidth > 992) {
    document.getElementById("shopping-cart-image").classList.remove("fa-3x");
    document.getElementById("shopping-cart-image").classList.add("fa-lg");
  }
});

// Banner offers slider
var index = 0;
var bannerSlides = document.querySelectorAll(".banner-offers-slides");
var bannerSlidesDot = document.querySelectorAll(".banner-dot-individual");

function changeSlide() {
  if (index < 0) {
    index = bannerSlides.length - 1;
  }

  if (index > bannerSlides.length - 1) {
    index = 0;
  }

  for (let i = 0; i < bannerSlides.length; i++) {
    bannerSlides[i].style.display = "none";
    bannerSlidesDot[i].classList.remove("active");
  }

  if (bannerSlides[index]) bannerSlides[index].style.display = "block";
  if (bannerSlides[index]) bannerSlidesDot[index].classList.add("active");

  index++;

  setTimeout(changeSlide, 2000);
}

changeSlide();

var MenuItems = document.querySelector(".MenuItems");

MenuItems.style.maxHeight = "0px";


const menutoggle = () => {
  console.log("clicked")
  if (MenuItems.style.maxHeight == "0px") {
    MenuItems.style.maxHeight = "200px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
}

navbarMenuToggleButton.addEventListener('click', menutoggle)
