import Product from './product';
import ajaxRequests from './ajax';
import PubSub from './pubsub';
import Header from './../../js/common/header';
var Cart = (function() {
	var data ={
		list:[],
		totalCartValue:0,
		totalCount:0
	}
	return {
		addProduct:function(name, image, price, category, id, quantity){
			this.updateData(name, image, price, category, id, quantity);
			PubSub.publish('productAdded',data.totalCount);
			ajaxRequests.promiseFunc('api/addtocart',function(res){
				console.log(res);
			},'POST',data);	
		},
		updateData:function(name, image, price, category, id, quantity){
			var index = (data.list).findIndex((el, index, arr)=>{
				return el.id === id;
			});
			if(index>=0){
				var list = data.list;
				list[index].setQuantity(1);
				var totalvalue = list[index].totalItemValue();
				data.totalCartValue = data.totalCartValue + list[index].price;
			}
			else{
				var item = new Product(name, image, price, category, id, quantity);
				(data.list).push(item);
				data.totalCartValue = data.totalCartValue + item.totalItemValue();
			}
			data.totalCount= data.totalCount+quantity;
		},
		getData:function(){
			return data;
		},
		updateProduct:function(id, quantity){
			var index = (data.list).findIndex((el, index, arr)=>{
				return el.id === id;
			});
			var list = data.list;
			var newQuantity = list[index].setQuantity(quantity);
			if(newQuantity===0){
				list.splice(index,1);
			}
			data.totalCount=0;
			data.totalCartValue=0;
			list.forEach((el,index,array)=>{
				data.totalCount = data.totalCount + el.quantity;
				data.totalCartValue = data.totalCartValue + el.totalItemValue();
			});
			PubSub.publish('productAdded',data.totalCount);
			ajaxRequests.promiseFunc('api/addtocart',function(res){
				console.log(res);
			},'POST',data);						
		}
	}
}());
export default Cart;