import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  itemInCart: any = [];

  constructor() {}

  addProductToCart(product) {
    if (this.itemInCart != null && this.itemInCart.length > 0) {
      this.itemInCart.forEach((element) => {
        if (element.id == product.id && element.count) {
          element.count++;
          element.productPrice = element.price * element.count;
        }
      });
      if (!this.itemInCart.find((x) => x.id == product.id)) {
        product.count = 1;
        product.productPrice = product.price;
        this.itemInCart.push(product);
      }
    } else {
      product.count = 1;
      product.productPrice = product.price;
      this.itemInCart.push(product);
    }
  }

  removeProductsFromCart(product) {
    this.itemInCart.forEach((element) => {
      if (element.id == product.id && element.count > 1) {
        element.count--;
        element.productPrice = element.price * element.count;
      } else if (element.id == product.id) {
        this.itemInCart.pop(element);
      }
    });
  }

  getTotalAmount() {
    let amount = 0;
    this.itemInCart.forEach((element) => {
      amount += element.productPrice;
    });
    return amount;
  }
}
