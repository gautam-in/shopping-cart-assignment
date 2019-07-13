import  ProductList from './../../components/common/organisms/o-productList.hbs';
var domUtils = (function(){
	var ProductsList = function(productsDataPromise){
		productsDataPromise.then(function(data){
			var div = document.createElement('div');
			document.querySelector('.plp-container').innerHTML ='';
			div.innerHTML = ProductList({
					products:JSON.parse(data).products
			})
			document.querySelector('.plp-container').appendChild(div);
		});	
	}
	return {
		UpdateProducts:function(productsDataPromise){
			ProductsList(productsDataPromise);
		}
	}
}());
export default domUtils;