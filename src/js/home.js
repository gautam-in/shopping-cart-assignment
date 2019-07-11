import './../utils/styles/global.scss';
import './../styles/common/header.scss';
import './../styles/home.scss';
import Home from './../components/features/home/home.hbs';
import ajax from './../utils/scripts/ajax';
import Header from './common/header';
import Carousel from './common/carousel';


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
	Header.init();
	Carousel();
});
	