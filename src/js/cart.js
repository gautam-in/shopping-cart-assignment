import './../utils/styles/global.scss';
import './../styles/common/header.scss';
import './../styles/cart.scss';
import Product from './../utils/scripts/product';
import Cart from './../utils/scripts/data';
import ajaxRequests from './../utils/scripts/ajax';
import PubSub from './../utils/scripts/pubsub';
import  CartHTML from './../components/features/cart/cart.hbs';
import  CartProducts from './../components/common/organisms/o-cart--product.hbs';


var promiseCart = ajaxRequests.promiseFunc('api/getcart',function(result,resolve, reject){
	resolve(result);
},'GET');	
promiseCart.then(function(result){
	result = JSON.parse(result);
	var data = (result.data.list).map((el,index,array)=>{
		return new Product(el.name, el.image, el.price, el.category, el.id, el.quantity);
	});
	Cart.updateCart(data);
	var cartData = Cart.getData();
	var div = document.createElement('div');
	div.innerHTML = CartHTML({
		data:{
			items:cartData.list
		}
	});
	document.body.appendChild(div);
	PubSub.publish('productAdded',cartData.totalCount);
	document.querySelector('.cart-lists-block').addEventListener('click',function(e){
		if(e.target.nodeName === 'BUTTON'){
			var id = e.target.parentNode.dataset.id;
			var quantity;
			if(e.target.classList.contains('button-dec')){
				quantity = -1;	
			}
			
			else if(e.target.classList.contains('button-inc')){
				quantity=1;
			}

			Cart.updateProduct(id, quantity);
			var div = document.createElement('div');
			document.querySelector('.cart-lists-block').innerHTML ='';
			div.innerHTML = CartProducts({
					items:cartData.list
			})
			document.querySelector('.cart-lists-block').appendChild(div);
		}
	});
});
