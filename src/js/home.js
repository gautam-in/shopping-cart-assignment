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
  	var rawTemplate= document.getElementById("categoriesTemplate").innerHTML;
  	var compiledTemplate = Handlebars.compile(rawTemplate);
  	var ourGeneratedHTML = compiledTemplate(categories);

  	var categoriesContainer = document.getElementById("categories-container");
  	categoriesContainer.innerHTML = ourGeneratedHTML;
  }


  function createBannersHTML(banners) {
  	var rawTemplate= document.getElementById("bannersTemplate").innerHTML;
  	var compiledTemplate = Handlebars.compile(rawTemplate);
  	var ourGeneratedHTML = compiledTemplate(banners);

  	var bannersContainer = document.getElementById("banners-container");
  	bannersContainer.innerHTML = ourGeneratedHTML;
  	showSlides(slideIndex);
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