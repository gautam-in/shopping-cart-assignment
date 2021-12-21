import cartTemplate from "../../templates/cart.handlebars";
import cartContentSectionTemplate from "../../templates/cartContentSection.handlebars";
import cartFooterSectionTemplate from "../../templates/cartFooterSection.handlebars";
import cartHeaderSectionTemplate from "../../templates/cartHeaderSection.handlebars";
import { API_PATH } from "../constants/constants";
import { fetchData } from "../helpers/apiService";

export default class CartView {
  constructor() {
    const cartItemsString = localStorage.getItem("cartItems");
    this.cartItems = cartItemsString ? JSON.parse(cartItemsString) : [];
    this.totalCostCheckout = 0;
    if (this.cartItems && this.cartItems.length) {
      this.cartItems.forEach((productItem) => {
        this.totalCostCheckout += productItem.totalItemOrderCost;
      });
    }
  }

  async addToCart(product) {
    try {
      // Sample addToCart API call
      const successResonse = await this.addToCartAPI({
        productId: product.id,
        quantity: "+1",
      });
      if (successResonse.response === "Success") {
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
        this.showToastMessage(successResonse.responseMessage);
      } else {
        throw new Error("Something went wrong in addToCart API !");
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  showToastMessage(message) {
    let toastDiv = document.createElement("div");
    toastDiv.id = "snackbar";
    toastDiv.textContent = message;
    toastDiv.className = "show";
    document.body.appendChild(toastDiv);
    setTimeout(function () {
      toastDiv.className = "";
    }, 3000);
  }

  async addToCartAPI(postData) {
    return fetchData(API_PATH.addToCart, "POST", postData);
  }

  updateCartPopupTemplate() {
    const inputObj = {
      cartItems: this.cartItems,
      totalCostCheckout: this.totalCostCheckout,
    };

    const viewHtml = cartTemplate(inputObj);
    document.querySelector("#cartPopupTemplate").innerHTML = viewHtml;
  }

  updateCartContentTemplateOnly() {
    const inputObj = {
      cartItems: this.cartItems,
      totalCostCheckout: this.totalCostCheckout,
    };

    const viewHtml = cartContentSectionTemplate(inputObj);
    document.querySelector(".cart-content").innerHTML = viewHtml;
  }

  updateCartFooterTemplateOnly() {
    const inputObj = {
      cartItems: this.cartItems,
      totalCostCheckout: this.totalCostCheckout,
    };

    const viewHtml = cartFooterSectionTemplate(inputObj);
    document.querySelector(".cart-footer").innerHTML = viewHtml;
  }

  updateCartHeaderTemplateOnly() {
    const inputObj = {
      cartItems: this.cartItems,
      totalCostCheckout: this.totalCostCheckout,
    };

    const viewHtml = cartHeaderSectionTemplate(inputObj);
    document.querySelector(".cart-header").innerHTML = viewHtml;
  }

  incrementOrDecrementQuantity(type, productId) {
    if (type === "minus") {
      this.decrementQuantity(productId);
    } else if (type === "plus") {
      this.incrementQuantity(productId);
    }
  }

  incrementQuantity(productId) {
    this.cartItems.forEach((product) => {
      if (product.id === productId) {
        product.quantity++;
        product.totalItemOrderCost = product.quantity * product.price;
        this.totalCostCheckout += product.price;
      }
    });
    localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    this.updateCartContentTemplateOnly();
    this.updateCartFooterTemplateOnly();
  }

  decrementQuantity(productId) {
    let isZeroQuantity = false;
    this.cartItems.forEach((product) => {
      if (product.id === productId) {
        product.quantity--;
        product.totalItemOrderCost = product.quantity * product.price;
        this.totalCostCheckout -= product.price;
        if (product.quantity === 0) {
          isZeroQuantity = true;
        }
      }
    });
    if (isZeroQuantity) {
      this.cartItems = this.cartItems.filter(
        (product) => product.id !== productId
      );
    }
    localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    this.updateCartContentTemplateOnly();
    this.updateCartFooterTemplateOnly();
    if (isZeroQuantity) {
      document.querySelector("#cartItemsLength").textContent =
        this.cartItems.length;
      this.updateCartHeaderTemplateOnly();
    }
  }
}
