import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: any[] = [];

  cart$ = new Subject<boolean>();

  constructor() {}

  getCart() {
    return [...this.cart];
  }

  getCartItems$(): Observable<any> {
    return this.cart$;
  }

  addToCart(item: any): void {
    this.cart.push(item);
    this.cart$.next(true);
  }
}
