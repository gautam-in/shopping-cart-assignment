document.addEventListener('click', function (event) {

  // If the event target doesn't match bail
  if (event.target.hasAttribute('data-slide-type')) {
   let val = event.target.getAttribute('data-slide-type');
    if(val === 'prev'){
      carousel.plusSlides(-1);
    } else if(val=== 'next') {
      carousel.plusSlides(1);
    } else {
      carousel.currentSlide(val);
    }
  } else if(event.target.hasAttribute('data-category')){
      let val = event.target.getAttribute('data-category');
      exploreBeverages(val);
  }else {
      return false;
    }

  // Otherwise, run your code...

}, false);

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
            let slides = document.getElementsByClassName("carousal__img");
            let dots = document.getElementsByClassName("dot");
            if (n === slides.length) {slideIndex = 0}    
            if (n < 0) {slideIndex = slides.length-1}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace("active", "");
            }
            slides[slideIndex].style.display = "block";  
            dots[slideIndex].className += " active";
        }
 
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }

        function currentSlide(n) {
          showSlides(slideIndex = parseInt(n));
        }
 
        return {
            showSlides: showSlides,
            plusSlides: plusSlides,
            currentSlide: currentSlide
        };
 
})();

function exploreBeverages(id){
window.location.href = `/products/${id}`;
}


setTimeout(function(){
  let address =window.location.pathname;
  if(address === '/'){
   carousel.showSlides(1);
  }
})

init();