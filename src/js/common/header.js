import PubSub from './../../core/pubsub.js';
var Header = (function(){
	var NavToggle = function(){
		var toggleBtn =  document.querySelector('.nav-icon-mobile');
		toggleBtn.addEventListener('click',toggleNav);
		function toggleNav(){
			var em = document.querySelector('.nav-icon-mobile em');
			em.classList.toggle('icofont-navigation-menu');
			this.parentNode.classList.toggle('active');
			em.classList.toggle('icofont-close');
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