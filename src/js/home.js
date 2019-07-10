import './../utils/styles/global.scss';
import './../styles/home.scss';
import ajax from './../utils/scripts/ajax';
import PubSub from './../utils/scripts/pubsub';
import  Home from './../components/features/home/home.hbs';

var promiseBanners = new Promise(function(resolve, reject){
	ajax('api/banners', function(data){
		resolve(data);
	});
});
var promiseCategories = new Promise(function(resolve, reject){
	ajax('api/categories', function(data){
		resolve(data);
	});
});
Promise.all([promiseBanners, promiseCategories]).then(function(data){
	var div = document.createElement('div');
	div.innerHTML = Home({
		data:{
			banners:JSON.parse(data[0]).banners,
			categories:JSON.parse(data[1]).categories
		}
	});
	document.body.appendChild(div);	
	init(document);
});

function init(document){
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
	NavToggle()
	Carousel()
	publishEvent()
}	