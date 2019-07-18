import './../utils/styles/global.scss';
import './../styles/common/header.scss';
import './../styles/common/footer.scss';
import './../styles/cart.scss';
import '@babel/polyfill';
import Product from './../utils/scripts/product';
import Events from './../utils/scripts/registerEventsOnLoad.js';
import Cart from './../utils/scripts/data';
import ajaxRequests from './../utils/scripts/ajax';
import PubSub from './../utils/scripts/pubsub';
import  CartHTML from './../components/features/cart/cart.hbs';
import Header from './common/header';

PubSub.subscribe('cartUpdate',function(data){
		document.querySelector('.cart-value').innerHTML = 'Rs.' + data;
});
PubSub.subscribe('productAdded',function(data){
		document.querySelector('.header-cart-count').innerHTML = 'My Cart ('+data+' items)';
});

var promiseCart = ajaxRequests.promiseFunc('api/getcart',function(result,resolve, reject){
	resolve(result);
},'GET');	
promiseCart.then(function(result){
	result = JSON.parse(result);
	(result.list).forEach((el,index,array)=>{
		Cart.updateData(el.name, el.image, el.price, el.category, el.id, el.quantity);
	});
	var cartData = Cart.getData();

	var div = document.createElement('div');
	div.innerHTML = CartHTML({
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
			totalCartValue:cartData.totalCartValue,
			items:cartData.list
		}
	});
	document.body.appendChild(div);
	Header.init();
	PubSub.publish('productAdded',cartData.totalCount);
	Events.cartEvents(cartData);
});
