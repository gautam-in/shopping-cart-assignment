export const initSlider = () => {
  var slideIndex = 1;
  showDivs(slideIndex);
  function plusDivs(n) {
    showDivs((slideIndex += n));
  }
  function currentDiv(n) {
    showDivs((slideIndex = n));
  }
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" slide-white", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " slide-white";
  }

  document.querySelectorAll("#slider-dot").forEach((el) => {
    el.addEventListener("click", (e) => {
      currentDiv(Number(e.target.dataset.id) + 1);
    });
  });

  document.querySelector(".slider-left-btn").addEventListener("click", () => {
    plusDivs(-1);
  });

  document.querySelector(".slider-right-btn").addEventListener("click", () => {
    plusDivs(1);
  });
};
