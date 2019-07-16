import './../utils/styles/global.scss';
import './../styles/common/header.scss';
import './../styles/home.scss';
import Home from './../components/features/home/home.hbs';
import '@babel/polyfill';
import ajaxRequests from './../utils/scripts/ajax';
import PubSub from './../utils/scripts/pubsub.js';
import Header from './common/header';
import Carousel from './common/carousel';
 

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
			banners:JSON.parse(data[0]).banners,
			categories:JSON.parse(data[1]).categories
		}
	});
	document.body.appendChild(div);	
	Header.init();
	Carousel();
});
	