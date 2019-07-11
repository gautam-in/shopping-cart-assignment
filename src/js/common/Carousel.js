var Carousel = function(){
	var images = document.querySelectorAll('.carousel-wrapper img');
	var currentSlide = 0;
	var slideInterval = setInterval(nextSlide, 3000);
	var next = document.querySelector('.next');
	var prev = document.querySelector('.prev');
	var clear =1;
	function goToSlide(n){
	 	/*images[currentSlide].parentNode.classList.remove("margin-"+currentSlide);*/
	 	images[currentSlide].parentNode.style.marginLeft = 0;
	 	currentSlide = (images.length+n)%images.length;
	 	/*images[currentSlide].parentNode.classList.add("margin-"+currentSlide);*/
	 	images[currentSlide].parentNode.style.marginLeft = -(currentSlide*100)+'%';
	 	if(!clear){
	 		clear=1;
	 		slideInterval = setInterval(nextSlide,3000);
	 	}
	}
	next.addEventListener('click',nextSlideClick);
	prev.addEventListener('click',prevSlideClick); 
	function nextSlide(){
	 	goToSlide(currentSlide+1);
	}
	function prevSlide(){
	 	goToSlide(currentSlide-1);
	}
	function nextSlideClick(){
	 	clearInterval(slideInterval);
	 	clear=0;
	 	nextSlide();
	}
	function prevSlideClick(){
	 	clearInterval(slideInterval);
	 	clear=0;
	 	prevSlide();
	}
}
export default Carousel;