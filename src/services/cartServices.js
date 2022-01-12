class CartService {
  constructor() {
    this.products = {};
  }

  addToCart = (product) => {
    if (!this.products[product.id]) {
      product.count = 1;
      this.products[product.id] = product;
    } else {
      this.products[product.id].count += 1;
    }
  };

  removeFromCart = (product) => {
    if (this.products[product.id.count] > 1) {
      this.products[product.id].count -= 1;
    } else {
      product.count = 1;
      this.products[product.id].count = 0;
    }
  };

  showCart = () => {
    console.log("Products in cart", this.products);
  };
}

export default new CartService();
