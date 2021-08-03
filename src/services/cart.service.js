import { BehaviorSubject, Subject } from "rxjs";
import { BaseService } from "./base.service";

export class CartService extends BaseService {
  constructor() {
    super();
    this.cartItems = new Map();
    this.cartSubject = new Subject();
    this.notifications = new Map();
  }

  addToCart(product) {
    if (this.cartItems.has(product.id)) {
      this.cartItems.set(
        product.id,
        [...this.cartItems.get(product.id), {...product}]
      );
    } else {
      this.cartItems.set(product.id, [{ ...product }]);
    }
    if (this.notifications.has(product.id)) {
      this.notifications.get(product.id).next(this.cartItems.get(product.id));
    }
    this.cartSubject.next(this.cartItems);
  }

  removeFromCart(product) {
    this.cartItems.set(product.id, this.cartItems.get(product.id).slice(1));
    if (this.notifications.has(product.id)) {
      this.notifications.get(product.id).next(this.cartItems.get(product.id));
    }
    if (this.cartItems.get(product.id).length === 0) {
      this.cartItems.delete(product.id);
    }
    this.cartSubject.next(this.cartItems);
  }

  getCurrentItems(id) {
    return this.cartItems.get(id) || [];
  }

  getAllItems() {
    return this.cartItems;
  }

  notifyMe(id) {
    if (!this.notifications.has(id)) {
      this.notifications.set(id, new BehaviorSubject([]));
    }
    return this.notifications.get(id);
  }
}
