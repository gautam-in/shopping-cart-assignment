fetch('http://localhost:5000/categories')
  .then(
    function(response) {
      if (response.status !== 200) {
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
      	console.log(data);
      	createCategoriesHTML(data);
        
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

fetch('http://localhost:5000/banners')
  .then(
    function(response) {
      if (response.status !== 200) {
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
      	console.log(data);
      	createBannersHTML(data);
        
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

  function createCategoriesHTML(categories) {
  	Handlebars.registerHelper('ifEven', function (index, options) {
	   if(index%2 == 0){
	            return options.fn(this);
	       } else {
	            return options.inverse(this);
	         }
	 
	});
	createHTML(categories,"categories-container","categoriesTemplate");
  }


  function createBannersHTML(banners) {
  	createHTML(banners,"banners-container","bannersTemplate");
  	createDotsTemplate(banners);
  	
  }

  function createDotsTemplate(dots) {
  	createHTML(dots,"carousal-dot","dotsTemplate");
  	showSlides(slideIndex);
  }

  function createHTML(data,ctrId,templateId) {
  	// body...
  	var rawTemplate = document.getElementById(templateId).innerHTML;
  	var compiledTemplate = Handlebars.compile(rawTemplate);
  	var ourGeneratedHTML = compiledTemplate(data);

  	var container = document.getElementById(ctrId);
  	container.innerHTML = ourGeneratedHTML;
  }

var slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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