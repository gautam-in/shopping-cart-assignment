class CartService {
  constructor() {
    this.products = {};
    this.total = 0;
  }

  addToCart = (product) => {
    if (!this.products[product.id]) {
      product.count = 1;
      this.products[product.id] = product;
    } else {
      this.products[product.id].count += 1;
    }
    this.updateProductTotal(product);
    console.log(this.products);
  };

  removeFromCart = (product) => {
    if (this.products[product.id].count > 1) {
      this.products[product.id].count -= 1;
      this.updateProductTotal(product);
    } else {
      delete this.products[product.id];
    }
  };

  updateProductTotal = (product) => {
    this.products[product.id].totalPrice =
      this.products[product.id].price * this.products[product.id].count;
  };

  getTotal = () => {
    let total = 0;
    for (let product in this.products) {
      total += this.products[product].totalPrice;
    }
    this.total = total;
  };

  showCart = () => {
    console.log("Products in cart", this.products);
  };
}

export default new CartService();
