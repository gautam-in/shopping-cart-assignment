import { Injectable } from '@angular/core';

import { Product } from 'src/app/shared/models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: any = {};
  totalItems: number = 0;

  constructor() {}

  calculateTotalItems() {
    this.totalItems = Object.keys(this.cart).reduce((total, productkey) => {
      return total + this.cart[productkey].quantity;
    }, 0);
  }

  addToCart(product: Product) {
    if (this.cart[product.id]) {
      this.cart[product.id].quantity++;
    } else {
      this.cart[product.id] = {
        id: product.id,
        name: product.name,
        quantity: 1,
      };
    }

    this.calculateTotalItems();
  }

  removeFromCart(product: Product) {
    if (this.cart[product.id]) {
      this.cart[product.id].quantity--;

      if (this.cart[product.id].quantity === 0) {
        delete this.cart[product.id];
      }
    }

    this.calculateTotalItems();
  }
}
