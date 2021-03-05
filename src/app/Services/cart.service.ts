import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProductResponse } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  subject$ = new BehaviorSubject([]);
  itemCount$ = this.subject$.asObservable();
  initialCart = [];

  constructor() { }

  addProduct(product: IProductResponse) {
    let newCart = [];
    let finalCart = [];
    let index = 0;
    this.initialCart.push(product);
    this.initialCart.forEach((prod, i) => {
      if (prod.id === product.id) {
        index += 1;
        prod.count = index;
      }
      newCart.push(prod);
    });
    finalCart = newCart.filter((val, i) => newCart.indexOf(val) === i);
    this.subject$.next(finalCart);
    return this.itemCount$;
  }
}
