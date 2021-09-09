    var slideIndex = 1;
    showSlides(slideIndex);
    
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
      slides[slideIndex-1].style.display= "block";  
      dots[slideIndex-1].className += " active";
    }
    

// api category url
const category_api_url = "http://localhost:5000/categories";

// Defining async function
async function getapi(category_url) {
	
	// Storing response
	const response = await fetch(category_url);
	// Storing category_data in form of JSON
  var category_data = await response.json();
	show(category_data);
}

// Calling that async function
getapi(category_api_url);

// Function to define innerHTML for HTML table
function show(category_data) {
  let tab;
	// Loop to access all rows
	for (let r of category_data) {
    tab = 
    `<div><img src=${r.imageUrl} width="25%">
    <span style="display: inline-block">
      <div><b> ${r.name}</b></div>
      <div>${r.description}</div>
      <div><button onclick="window.location.href = '../html/${r.key}.html';">Explore ${r.name}</button></div>
    </span>
  </div>`;
	// Setting innerHTML as tab variable
  document.getElementById("homedata").innerHTML = document.getElementById("homedata").innerHTML + tab;
  }
}



// // api offer url
// const offers_api_url = "http://localhost:5000/banners";

// // Defining async function
// async function getapi(offers_url) {
	
// 	// Storing response
// 	const response = await fetch(offers_url);
// 	// Storing offers data in form of JSON
//   var offers_data = await response.json();
// 	showOffer(offers_data);
// }

// // Calling that async function
// getapi(offers_api_url);

// // Function to define innerHTML for HTML table
// function showOffer(offers_data) {
//   let tab;
// 	// Loop to access all rows
// 	for (let r of offers_data) {
//     tab = 
//     ` <div class="mySlides fade">
//     <img src=${r.bannerImageUrl} style="width:100%" alt=${r.bannerImageAlt}>
//   </div>`;
// 	// Setting innerHTML as tab variable
//   document.getElementById("bannerdata").innerHTML = document.getElementById("bannerdata").innerHTML + tab;
//   }
//}