import './../../../utils/styles/global.scss';
import './../../../styles/common/header.scss';
import './../../../styles/common/footer.scss';
import './products.scss';
import Products from './products.hbs';
import '@babel/polyfill';
import ajaxRequests from './../../../utils/scripts/ajax';
import PubSub from './../../../core/pubsub';
import Product from './../../../utils/scripts/product';
import Cart from './../../../utils/scripts/data';
import Events from './../../../core/registerEventsOnLoad';
import Header from './../../../js/common/header';
import ToggleCategories from './../../../js/common/Category-mobile';

var id, promiseProducts, promiseCart, promiseCategories;

var getCatID = function(){
	return window.location.href.split('=')[1];
}
var promiseProducts = function(cb){
	return ajaxRequests.promiseFunc('api/products?id='+cb,function(data,resolve,reject){
		resolve(data);
	},'GET')
};

var promiseCart = ajaxRequests.promiseFunc('api/getcart',function(data,resolve,reject){
	resolve(data);
},'GET');

var promiseCategories = ajaxRequests.promiseFunc('api/categories', function(data,resolve,reject){
	resolve(data);
},'GET');

Promise.all([promiseProducts(getCatID()), promiseCategories, promiseCart]).then(function(data){
	var [products,categories,cartData] = data;
	var div = document.createElement('div');
	div.innerHTML = Products({data:{
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
		products:JSON.parse(products),
		categories:JSON.parse(categories)}});
	document.body.appendChild(div);

	(JSON.parse(cartData).list).forEach((el,index,array)=>{
		Cart.updateData(el.name, el.image, el.price, el.category, el.id, el.quantity);
	});

	var totalCount = Cart.getData().totalCount;
	PubSub.publish('productAdded',totalCount);
	Header.init();
	ToggleCategories();
	Events.initEvents(promiseProducts);
});
