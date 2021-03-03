import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  subject$ = new BehaviorSubject([]);
  itemCount$ = this.subject$.asObservable();
  cart = [];

  constructor() { }

  addProduct(product) {
    this.cart.push(product);
    this.subject$.next(this.cart);
    return this.itemCount$;
  }
}
