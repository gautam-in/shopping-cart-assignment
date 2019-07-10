import './../utils/styles/global.scss';
import './../styles/products.scss';

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
NavToggle();

function toggleCat(){
	var toggleBtn =  document.querySelector('.category-mobile');
	var ul = document.querySelector('.category-block');
	toggleBtn.addEventListener('click',toggleNav);
	ul.addEventListener('click', selectCategory);
	function toggleNav(){
		if(ul.classList.contains('active')){
			ul.classList.remove('active');
			this.classList.remove('active');
		}
		else{
			ul.classList.add('active');
			this.classList.add('active');
		}
	}
	function selectCategory(e){
		if(toggleBtn.classList.contains('active')){
			toggleBtn.innerText= e.target.innerText;
			ul.classList.remove('active');
			toggleBtn.classList.remove('active');
		}
		
	}
}
toggleCat();