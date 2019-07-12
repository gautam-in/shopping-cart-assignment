import Product from './product';
import ajaxRequests from './ajax'
var Cart = (function() {
	var data ={
		list:[],
		totalCartValue:0,
		totalCount:0
	}
	return {
		addProduct:function(name, image, price, category, id, quantity){
			var index = (data.list).findIndex((el, index, arr)=>{
				return el.id === id;
			});
			if(index>=0){
				var list = data.list;
				list[index].setQuantity(1);
				var totalvalue = list[index].totalItemValue();
				
			}
			else{
				var item = new Product(name, image, price, category, id, quantity);
				(data.list).push(item);
			}
			ajaxRequests.ajaxPost('api/addtocart',function(res){
					console.log(res);
			},data)
		},
		updateCart:function(){
			var promiseCart = new Promise(function(resolve, reject){
				ajaxRequests.ajax('api/getcart',function(result){
					resolve(result);
				})	
			});
			return promiseCart;
		},
		getData:function(){
			return data;
		}
	}
}());
export default Cart;