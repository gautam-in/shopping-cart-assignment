import  ProductList from './../../components/common/organisms/o-productList.hbs';
import  CartProducts from './../../components/common/organisms/o-cart--product.hbs';
var domUtils = (function(){
	var ProductsList = function(productsDataPromise){
		productsDataPromise.then(function(data){
			var div = document.createElement('div');
			document.querySelector('.plp-container').innerHTML ='';
			div.innerHTML = ProductList({
					products:JSON.parse(data)
			})
			document.querySelector('.plp-container').appendChild(div);
		});	
	}
	var CartList = function(cartData){
		var div = document.createElement('div');
		document.querySelector('.cart-lists-block').innerHTML ='';
		div.innerHTML = CartProducts({
				items:cartData.list
		})
		document.querySelector('.cart-lists-block').appendChild(div);
	}
	return {
		UpdateProducts:function(productsDataPromise){
			ProductsList(productsDataPromise);
		},
		UpdateCartList:function(cartData){
			CartList(cartData);
		}
	}
}());
export default domUtils;