import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  selectedId = new BehaviorSubject('');
  products: string[] = [];
  cart = new BehaviorSubject(this.products);

  constructor() {
  }

  updateId(id: string): void {
    this.selectedId.next(id);
  }

  addToCart(productId: string): void {
    this.products = [...this.products, productId];
    this.cart.next(this.products);
  }
}
