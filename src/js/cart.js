import './../utils/styles/global.scss';
import './../styles/common/header.scss';
import './../styles/cart.scss';
import Product from './../utils/scripts/product';
import Cart from './../utils/scripts/data';
import ajaxRequests from './../utils/scripts/ajax';
import  CartHTML from './../components/features/cart/cart.hbs';


var promiseCart = new Promise(function(resolve, reject){
	ajaxRequests.ajax('api/getcart',function(result){
		resolve(result);
	})	
});
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
})
