
// For carosuel
import {OnLoadCartNumbers} from './product.js'
var slideIndex = 1;

var myTimer;

var slideshowContainer;

window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 3000);
  
    slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];
  
    slideshowContainer = document.getElementsByClassName('slideshow-container')[0];
  
    slideshowContainer.addEventListener('mouseenter', pause)
    slideshowContainer.addEventListener('mouseleave', resume)
})

// NEXT AND PREVIOUS CONTROL
function plusSlides(n){
  clearInterval(myTimer);
  if (n < 0){
    showSlides(slideIndex -= 1);
  } else {
   showSlides(slideIndex += 1); 
  }
  
  
  if (n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2)}, 3000);
  } else {
    myTimer = setInterval(function(){plusSlides(n + 1)}, 3000);
  }
}

function currentSlide(n){
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(n + 1)}, 3000);
  showSlides(slideIndex = n);
}

function showSlides(n){
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

var pause = () => {
  clearInterval(myTimer);
}

var resume = () =>{
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(slideIndex)}, 3000);
}

function HomepageCategoriesContent() {
  return fetch("../server/categories/index.get.json")
    .then((result) => {
      return result.json();
    })
    .catch((err) => console.log(error));
}
async function CategoriesContent() {
  let Response = await HomepageCategoriesContent();

  console.log(Response);
  Response.sort(function(a, b) { 
    return a.order - b.order  ||  a.name.localeCompare(b.name);
  });
  console.log(Response);
  for (let res of Response) {
    DisplayContent(res);
  }
}

CategoriesContent();
function DisplayContent(res) {
  console.log(res);
  let Article=document.querySelector(".Categories");
  // Section
  let Section=document.createElement("section");
  Section.setAttribute('class','category');
  let Shadow=document.createElement("div");
  Shadow.setAttribute('class','little-shadow');
    // image

  let Product_img=document.createElement("div");
  Product_img.setAttribute('class','product-image');
  // image
  let img=document.createElement('img')
  img.setAttribute('src',`..${res.imageUrl}`);
  img.setAttribute('alt',`${res.name}`);
  img.setAttribute('width',"100%");
  img.setAttribute('height',"auto");
  let Product_des=document.createElement("div");
  Product_des.setAttribute('class','product-des');
  // Heading
  let h3=document.createElement("h3");
  h3.setAttribute('class',"heading");
  h3.innerText=res.name;
//   Description
  let p=document.createElement("p");
  p.setAttribute('class',"description");
  p.innerText=res.description;
//   Button
  let button=document.createElement("button");
  button.setAttribute('class','btn');
  button.innerText="Explore "+res.key;
  // appendind child
  Product_img.append(img)
  ;
  Product_des.append(h3,p,button)
  
Section.append(Product_img,Product_des);
Article.append(Section);


}
CartNumbers();
OnLoadCartNumbers();