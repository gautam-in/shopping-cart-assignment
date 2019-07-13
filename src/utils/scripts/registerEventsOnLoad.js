import domUtils from './uiUpdate';
var Events = (function(){
	var FilterProducts = function(e, promise){
		if(e.target.nodeName==="LI"){
			var productsDataPromise = promise(e.target.dataset.id);
			domUtils.UpdateProducts(productsDataPromise);	
		}
		return false;
	}
	return {
		getProductList:function(promise, e){
			FilterProducts(e, promise);
		}	
	}
}());
export default Events;