function Product(name, image, price, category, id, quantity){
	this.name = name;
	this.image = image;
	this.category = category;
	this.id =id;
	this.quantity = quantity;
	this.price = price;
	this.getPrice=function(){
		return this.price;
	}
	this.getQuantity = function(){
		return this.quantity;
	}
	this.setQuantity = function(data){
		this.quantity = this.quantity+data;
		return this.quantity;
	}
}
Product.prototype.totalItemValue = function(){
	var totalPrice = this.getQuantity()*this.getPrice();
	return totalPrice;
}
export default Product;