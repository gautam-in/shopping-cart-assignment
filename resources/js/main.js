    //   /* Home page slider  */
    //   var prev = document.getElementById("prev-button-js");
    //   var next = document.getElementById("next-button-js");

    //   var slider_dot = document.getElementsByClassName("slider-dot");
    //   var slider_dot = Array.prototype.slice.call(slider_dot)
    //   var slideIndex = 1;

    //   if (typeof(prev) != 'undefined' && prev != null) {
    //       showSlide(slideIndex);

    //       prev.addEventListener("click", function() {
    //           slideIndex--;
    //           showSlide(slideIndex);
    //       });
    //       next.addEventListener("click", function() {
    //           slideIndex++
    //           showSlide(slideIndex);
    //       });
    //   }


    //   if (typeof(slider_dot) != 'undefined' && slider_dot != null) {
    //       slider_dot.forEach(function(elem, index) {
    //           elem.addEventListener("click", function() {
    //               currentSlide(index + 1);
    //           });
    //       });

    //   }

    //   function plusSlide(n) {
    //       showSlide(slideIndex += n);
    //   }

    //   function currentSlide(n) {
    //       showSlide(slideIndex = n);
    //   }

    //   function showSlide(n) {
    //       var i;
    //       var slides = document.getElementsByClassName("offer");
    //       var dots = document.getElementsByClassName("slider-dot");
    //       if (n > slides.length) {
    //           slideIndex = 1
    //       }
    //       if (n < 1) {
    //           slideIndex = slides.length
    //       }
    //       for (i = 0; i < slides.length; i++) {
    //           slides[i].style.display = "none";
    //       }
    //       for (i = 0; i < dots.length; i++) {
    //           dots[i].className = dots[i].className.replace(" active", "");
    //       }
    //       slides[slideIndex - 1].style.display = "block";
    //       dots[slideIndex - 1].className += " active";
    //   }

    //   /*  Menu for Mobile  */
    //   function w3_open() {
    //       document.getElementById("sidebar-menu").style.display = "block";
    //   }

    //   function w3_close() {
    //       document.getElementById("sidebar-menu").style.display = "none";
    //   }

    //   var open = document.getElementById("mobile-menu-open");
    //   var mobile = document.getElementById("mobile-menu-close");

    //   open.addEventListener("click", w3_open);
    //   mobile.addEventListener("click", w3_close);



    //   /*  Get the modal  */
    //   var modal = document.getElementById('cart-modal-id');
    //   var btn = document.getElementById("cart-img-id");

    //   var span = document.getElementsByClassName("close")[0];

    //   if (typeof(btn) != 'undefined' && btn != null) {
    //       btn.onmouseover = function() {
    //           modal.style.display = "block";
    //       }
    //       document.onmouseover = function(event) {
    //           if (event.target == modal) {
    //               modal.style.display = "none";
    //           }
    //       }
    //   }