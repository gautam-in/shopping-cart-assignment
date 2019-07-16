import PubSub from './../../utils/scripts/pubsub.js';
var Header = (function(){
	var NavToggle = function(){
		var toggleBtn =  document.querySelector('.nav-icon-mobile');
		toggleBtn.addEventListener('click',toggleNav);
		function toggleNav(){
			var em = document.querySelector('.nav-icon-mobile em');
			if(em.classList.contains('icofont-navigation-menu')){
				em.classList.remove('icofont-navigation-menu');
				this.parentNode.classList.add('active');
				em.classList.add('icofont-close');
			}
			else{
				em.classList.remove('icofont-close');
				this.parentNode.classList.remove('active');
				em.classList.add('icofont-navigation-menu');	
			}
		}
	}
	var count = 0;
	PubSub.subscribe('productAdded',function(data){
		count = data;
		document.querySelector('.text-count').innerHTML = count + ' items';
	});
	return {
		init:function(){
			NavToggle();
		}
	}
}());

export default Header;