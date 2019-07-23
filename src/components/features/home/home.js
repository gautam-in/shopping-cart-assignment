import './../../../utils/styles/global.scss';
import './../../../styles/common/header.scss';
import './../../../styles/common/footer.scss';
import './home.scss';
import Home from './home.hbs';
import '@babel/polyfill';
import ajaxRequests from './../../../utils/scripts/ajax';
import PubSub from './../../../utils/scripts/pubsub';
import Header from './../../../js/common/header';
import Cart from './../../../utils/scripts/data';
import Carousel from './../../../js/common/carousel';
import Events from './../../../utils/scripts/registerEventsOnLoad';
 
var promiseBanners = ajaxRequests.promiseFunc('api/banners',function(data,resolve,reject){
	resolve(data);
},'GET');

var promiseCategories = ajaxRequests.promiseFunc('api/categories', function(data,resolve,reject){
	resolve(data);
},'GET');

Promise.all([promiseBanners, promiseCategories]).then(function(data){
	var div = document.createElement('div');
	div.innerHTML = Home({
		data:{
			header:{
				logo:{
					src:'static/images/logo.png',
					alt:'Sabka Bazaar',
					link:'home.html'
				},
				nav:{
					primary:[
						{text:'Home',link:'/home.html'},
						{text:'Products',link:'/products.html'}
					],
					secondary:[
						{text:'Sign in',link:'/login.html'},
						{text:'Register',link:'/signup.html'}
					],
					cart:{
						link:'/cart.html',
						src:'static/images/cart.svg',
						alt:'cart'
					}
				}
			},
			banners:JSON.parse(data[0]),
			categories:JSON.parse(data[1])
		}
	});
	document.body.appendChild(div);	
	Header.init();
	Carousel();
	Events.cartCountEvent();
});

	