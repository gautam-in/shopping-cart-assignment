import Cart from './../utils/scripts/data';
import PubSub from './pubsub';
import domUtils from './../utils/scripts/uiUpdate';
import ajaxRequests from './../utils/scripts/ajax';
var Events = (function(){
	var filterProducts = function(promise, e){
		if(e.target.nodeName==="LI"){
			var productsDataPromise = promise(e.target.dataset.id);
			domUtils.UpdateProducts(productsDataPromise);	
		}
		return false;
	}
	var addProductToCart = function(e){
		if(e.target.nodeName === "BUTTON"){
			var productData = e.target.dataset.id;
			productData = JSON.parse(productData);
			PubSub.publish('productAdded',1);
			Cart.addProduct(productData.name,productData.imageURL, productData.price, productData.category,productData.id, 1)
		}
	}
	var updateProductQuantity = function(cartData, e){
		if(e.target.nodeName === 'BUTTON'){
			var id = e.target.parentNode.dataset.id;
			var quantity;
			if(e.target.classList.contains('button-dec')){
				quantity = -1;	
			}
			
			else if(e.target.classList.contains('button-inc')){
				quantity=1;
			}

			var count = Cart.updateProduct(id, quantity);
			domUtils.UpdateCartList(cartData);
			PubSub.publish('cartUpdate',cartData.totalCartValue);	
		}
	}
	var cartCount = function(){
		var count;
		var promiseCart = ajaxRequests.promiseFunc('api/getcart',function(result,resolve, reject){
								resolve(result);
						},'GET');
		promiseCart.then(function(result){
			result = JSON.parse(result);
			(result.list).forEach((el,index,array)=>{
				Cart.updateData(el.name, el.image, el.price, el.category, el.id, el.quantity);
			});
			PubSub.publish('productAdded',Cart.getCount());
		});
	}
	return {
		initEvents:function(promiseProducts){
			document.querySelector('.plp-container').addEventListener('click',addProductToCart);
			document.querySelector('.category-block').addEventListener('click',filterProducts.bind(null,promiseProducts));
		},
		cartEvents:function(cartData){
			document.querySelector('.cart-lists-block').addEventListener('click',updateProductQuantity.bind(null, cartData));
		},
		cartCountEvent:function(){
			cartCount();
		}	
	}
}());
export default Events;
