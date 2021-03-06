import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  subject$ = new BehaviorSubject([]);
  itemCount$ = this.subject$.asObservable();
  initialCart = [];
  finalCart = [];

  constructor() { }

  addProduct(product: IProduct) {
    let newCart = [];
    let index = 0;
    this.initialCart.push(product);
    this.initialCart.forEach((prod, i) => {
      if (prod.id === product.id) {
        index += 1;
        prod.count = index;
      }
      newCart.push(prod);
    });
    this.finalCart = newCart.filter((val, i) => newCart.indexOf(val) === i);
    this.subject$.next(this.finalCart);
    return this.itemCount$;
  }

  removeProduct(product: IProduct) {
    const productPosition = this.finalCart.indexOf(product);
    if (productPosition != -1) {
      this.finalCart.forEach(prod => {
        if (prod.id === product.id && prod.count > 0) {
          prod.count -= 1;
        }
        if (prod.count === 0) {
          this.finalCart.splice(productPosition, 1);
        }
      })
    }
    this.totalItemPrice();
    this.subject$.next(this.finalCart);
  }

  increaseProductQuantity(product: IProduct) {
    let newCart = [];
    this.finalCart.forEach((prod, i) => {
      if (prod.id === product.id) {
        ++prod.count;
      }
      newCart.push(prod);
    });
    this.finalCart = newCart.filter((val, i) => newCart.indexOf(val) === i);
    this.totalItemPrice();
    this.subject$.next(this.finalCart);
  }

  totalItemPrice() {
    let itemTotal = 0;
    for (const item of this.finalCart) {
      const productUnit = item.count;
      if (item.price) {
        item.totalPrice = item.price * productUnit;
      }
    }
    return itemTotal;
  }

  totalAmount() {
    let total = 0;
    for (const item of this.finalCart) {
      if (item.totalPrice) {
        total += item.totalPrice;
      }
    }
    return total;
  }

  resetCart() {
    this.initialCart = [];
    this.finalCart = [];
    this.subject$.next(this.finalCart);
  }
}
