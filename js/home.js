var slideIndex = 1;
var selectedCategory;
let categoryId,prevId;
var itemCounter =0;
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
setTimeout(function(){
  //showSlides(1);
})

function selectCategory(id){
  categoryId = id;
  let prevUrl =window.location.href.split("/");
  let prevId = prevUrl[prevUrl.length -1];
  let diffUrl = categoryId !== prevId;
  window.location.href = diffUrl? `/plp/${id}`:'/plp';

}

function buy(id, operation) {

  const url = `http://localhost:5000/addToCart`;

  fetch(url, {
  method: 'post',
  body: JSON.stringify({'id':id}),
  }).then(function(response) {
    if(response.status === 200) {
      itemCounter++;
      document.getElementById("cartNumber").innerHTML=`${itemCounter} items`;
    }
  });
}