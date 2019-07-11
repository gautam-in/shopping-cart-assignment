import './../utils/styles/global.scss';
import './../styles/common/header.scss';
import './../styles/products.scss';
import  Products from './../components/features/products/products.hbs';
import  ProductList from './../components/common/organisms/o-productList.hbs';
import ajax from './../utils/scripts/ajax';
import PubSub from './../utils/scripts/pubsub.js';
import Header from './common/header';
import ToggleCategories from './common/Category-mobile';

function getCatID(){
	return window.location.href.split('=')[1];
}
var id = getCatID();
var promiseProducts = function(id){
		return new Promise(function(resolve, reject){
		ajax('api/products?id='+id, function(data){
			resolve(data);
		});
	})
}

var promiseCategories = new Promise(function(resolve, reject){
	ajax('api/categories', function(data){
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
	document.querySelector('.category-block').addEventListener('click',triggerFilter);
	initClick();
});
function triggerFilter(e){
	if(e.target.nodeName==="LI"){
		var promiseProducts1 = promiseProducts(e.target.dataset.id);
		createProductsList(promiseProducts1);	
	}
	return false;
}

function createProductsList(promiseProducts){
	promiseProducts.then(function(data){
		var div = document.createElement('div');
		document.querySelector('.plp-container').innerHTML ='';
		div.innerHTML = ProductList({
				products:JSON.parse(data).products
		})
		document.querySelector('.plp-container').appendChild(div);
	});	
}
function initClick(){
	document.querySelector('.plp-container').addEventListener('click',function(e){
		if(e.target.nodeName === "BUTTON"){
			console.log('hi');
			PubSub.publish('productAdded',1);
		}
	});
}
