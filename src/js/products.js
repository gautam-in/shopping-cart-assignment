import './../utils/styles/global.scss';
import './../styles/common/header.scss';
import './../styles/products.scss';
import Products from './../components/features/products/products.hbs';
import ajaxRequests from './../utils/scripts/ajax';
import PubSub from './../utils/scripts/pubsub.js';
import Cart from './../utils/scripts/data.js';
import Events from './../utils/scripts/registerEventsOnLoad.js';
import Header from './common/header';
import ToggleCategories from './common/Category-mobile';

function getCatID(){
	return window.location.href.split('=')[1];
}
var id = getCatID();
var promiseProducts = function(id){
		return new Promise(function(resolve, reject){
		ajaxRequests.ajax('api/products?id='+id, function(data){
			resolve(data);
		});
	})
}

var promiseCategories = new Promise(function(resolve, reject){
	ajaxRequests.ajax('api/categories', function(data){
		resolve(data);
	});
});

Promise.all([promiseProducts(id), promiseCategories]).then(function(data){
	var div = document.createElement('div');
	div.innerHTML = Products({
		data:{
			products:JSON.parse(data[0]).products,
			categories:JSON.parse(data[1]).categories
		}
	});
	document.body.appendChild(div);
	Header.init();
	ToggleCategories();
	document.querySelector('.category-block').addEventListener('click',Events.getProductList.bind(null,promiseProducts));
	initClick();
});

function initClick(){
	document.querySelector('.plp-container').addEventListener('click',function(e){
		if(e.target.nodeName === "BUTTON"){
			var productData = e.target.dataset.id;
			productData = JSON.parse(productData);
			PubSub.publish('productAdded',1);
			Cart.addProduct(productData.name,productData.imageURL, productData.price, productData.category,productData.id, 1)
		}
	});
}
