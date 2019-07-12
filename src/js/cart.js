import './../utils/styles/global.scss';
import './../styles/common/header.scss';
import './../styles/cart.scss';
import Product from './../utils/scripts/product';
import  CartHTML from './../components/features/cart/cart.hbs';
import Cart from './../utils/scripts/data.js';

var promiseCart = Cart.updateCart();
promiseCart.then(function(result){
	result = JSON.parse(result);
	var data = (result.data.list).map((el,index,array)=>{
		return new Product(el.name, el.image, el.price, el.category, el.id, el.quantity);
	});
	var div = document.createElement('div');
	div.innerHTML = CartHTML({
		data:{
			items:data
		}
	});
	document.body.appendChild(div);
})
