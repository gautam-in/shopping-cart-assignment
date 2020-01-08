function init(){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       let data =eval('('+this.responseText+')');
       localStorage.setItem("products",JSON.stringify(data));
    }
  };
  xmlhttp.open("GET", "../server/products/index.get.json", true);
  xmlhttp.send();
}

let carousel = (function () {
        let slideIndex = 1;
        let categoryId,prevId;
        
        function showSlides(n) {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");
            if (n > slides.length) {slideIndex = 1}    
            if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style.display = "block";  
            dots[slideIndex-1].className += " active";
        }
 
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }

        function currentSlide(n) {
          showSlides(slideIndex = n);
        }
 
        return {
            showSlides: showSlides,
            plusSlides: plusSlides,
            currentSlide: currentSlide
        };
 
})();

setTimeout(function(){
  let address =window.location.pathname;
  if(address === '/'){
   carousel.showSlides(1);
  }
})

init();