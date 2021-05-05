import { Injectable } from '@angular/core';
import { IProduct } from 'src/models/product.model';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  itemInCart: any = [];
  totalAmount: number = 0;

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
        this.pushNewItem(product);
      }
    } else {
      this.pushNewItem(product);
    }
  }

  pushNewItem(product) {
    product.count = 1;
    product.productPrice = product.price;
    this.itemInCart.push(product);
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

  getTotalAmount(product: IProduct): any {
    this.totalAmount += product.price;
    return this.totalAmount;
  }
}
