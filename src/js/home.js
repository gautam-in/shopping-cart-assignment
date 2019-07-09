import './../utils/styles/global.scss';
import './../styles/home.scss';
import ajax from './../utils/scripts/ajax';
import PubSub from './../utils/scripts/pubsub';

ajax('api/categories', 1);
ajax('api/banners', 1);

PubSub.subscribe("anEvent", data => {
    console.log(
        `"anEvent", was published with this data: "${data.msg}"`
    );
});
(function(document){
	function  publishEvent() {
        const data = {
            msg: "TOP SECRET DATA"
        };
        PubSub.publish("anEvent", data);
    }
	function NavToggle(){
		var toggleBtn =  document.querySelector('.nav-icon--mobile');
		toggleBtn.addEventListener('click',toggleNav);
		function toggleNav(){
			var i = document.querySelector('.nav-icon--mobile em');
			if(i.classList.contains('icofont-navigation-menu')){
				i.classList.remove('icofont-navigation-menu');
				this.parentNode.classList.add('active');
				i.classList.add('icofont-close');
			}
			else{
				i.classList.remove('icofont-close');
				this.parentNode.classList.remove('active');
				i.classList.add('icofont-navigation-menu');	
			}
			

		}
	}
	function Carousel(){
		var images = document.querySelectorAll('.carousel-wrapper img');
		var currentSlide = 0;
		var slideInterval = setInterval(nextSlide, 3000);
		var next = document.getElementById('next');
		var prev = document.getElementById('prev');
		var clear =1;
		function goToSlide(n){
		 	images[currentSlide].parentNode.classList.remove("margin-"+currentSlide);
		 	currentSlide = (images.length+n)%images.length;
		 	images[currentSlide].parentNode.classList.add("margin-"+currentSlide);
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
	NavToggle();
	Carousel();
	publishEvent();
}(document));