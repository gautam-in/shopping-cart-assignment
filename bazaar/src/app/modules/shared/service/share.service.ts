import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShareService {

  cartValueCount = new Subject();
  cartValue = new Subject();
  footerVisibility = new BehaviorSubject(true);

  constructor() { }


  addCart(item: Object) {
    let itemQuantity = [];
    if (localStorage.getItem('cartItem')) {
      itemQuantity = JSON.parse(localStorage.getItem('cartItem'));
    }

    if (itemQuantity.length === 0) {
      item['quantity'] = 1;
      itemQuantity.push(item);
    }

    else {
      const itemIndex = itemQuantity.findIndex((itemQuantity) => itemQuantity.id === item['id']);

      if (itemIndex === -1) {
        item['quantity'] = 1;
        itemQuantity.push(item);
      }

      else {
        itemQuantity[itemIndex].quantity = itemQuantity[itemIndex].quantity + 1;
      }
    }
    localStorage.setItem('cartItem', JSON.stringify(itemQuantity));
    this.updateValue(itemQuantity);

  }

  removeCart(item: Object) {

    let itemQuantity = [];

    if (localStorage.getItem('cartItem')) {
      itemQuantity = JSON.parse(localStorage.getItem('cartItem'));
    }

    const itemIndex = itemQuantity.findIndex((itemQuantity) => itemQuantity.id === item['id']);
    if (itemQuantity[itemIndex].quantity > 1) {
      itemQuantity[itemIndex].quantity = itemQuantity[itemIndex].quantity - 1;
      localStorage.setItem('cartItem', JSON.stringify(itemQuantity));

    } else {
      itemQuantity = itemQuantity.filter(itemQuantity => itemQuantity.id !== item['id']);
      localStorage.setItem('cartItem', JSON.stringify(itemQuantity));

    }

    this.updateValue(itemQuantity);

  }


  updateValue(itemQuantity) {
    this.cartValue.next(itemQuantity);
    let totalItem =   itemQuantity.reduce(function (prev, cur) {
      return prev  + cur.quantity;
    }, 0)
    this.cartValueCount.next(totalItem);

    localStorage.setItem('totalItem', totalItem)
  }

  getCartValue() {
    return this.cartValue.asObservable();
  }

  getCartCount() {
    return this.cartValueCount.asObservable();
  }

  updateFooterStatus(status) {
    this.footerVisibility.next(status);
  }

  getfooterStatus() {

    return this.footerVisibility.asObservable();
  }
}
