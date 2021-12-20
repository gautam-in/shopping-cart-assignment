import cartTemplate from "../../templates/cart.handlebars";

export default class CartView {
  constructor() {
    const cartItemsString = localStorage.getItem("cartItems");
    this.cartItems = cartItemsString ? JSON.parse(cartItemsString) : [];
    this.totalCostCheckout = 0;
  }

  addToCart(product) {
    const checkProductExistInCart = this.cartItems.find(
      (productItem) => productItem.id === product.id
    );
    if (checkProductExistInCart) {
      this.cartItems.forEach((productItem) => {
        if (productItem.id === product.id) {
          productItem.quantity++;
          productItem.totalItemOrderCost =
            productItem.quantity * productItem.price;
          this.totalCostCheckout += productItem.price;
        }
      });
    } else {
      const newProductInCart = {
        ...product,
        quantity: 1,
        totalItemOrderCost: product.price,
      };
      this.totalCostCheckout += product.price;
      this.cartItems.push(newProductInCart);
    }

    localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    document.querySelector("#cartItemsLength").textContent =
      this.cartItems.length;
    this.updateCartPopupTemplate();
  }

  updateCartPopupTemplate() {
    const inputObj = {
      cartItems: this.cartItems,
      totalCostCheckout: this.totalCostCheckout,
    };

    const viewHtml = cartTemplate(inputObj);
    document.querySelector("#cartPopupTemplate").innerHTML = viewHtml;
  }
}
