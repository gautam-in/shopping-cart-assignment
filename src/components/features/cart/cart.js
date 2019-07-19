import './../../../utils/styles/global.scss';
import './../../../styles/common/header.scss';
import './../../../styles/common/footer.scss';
import './cart.scss';
import '@babel/polyfill';
import Product from './../../../utils/scripts/product';
import Cart from './../../../utils/scripts/data';
import ajaxRequests from './../../../utils/scripts/ajax';
import PubSub from './../../../utils/scripts/pubsub';
import  CartHTML from './cart.hbs';
import  CartProducts from './../../common/organisms/o-cart--product.hbs';
import Header from './../../../js/common/header';

PubSub.subscribe('cartUpdate',function(data){
		document.querySelector('.cart-value').innerHTML = 'Rs.' + data;
});
PubSub.subscribe('productAdded',function(data){
		document.querySelector('.header-cart-count').innerHTML = 'My Cart ('+data+' items)';
});
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
			totalCartValue:cartData.totalCartValue,
			items:cartData.list
		}
	});
	document.body.appendChild(div);
	Header.init();
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
			PubSub.publish('cartUpdate',cartData.totalCartValue);
		}
	});
});
