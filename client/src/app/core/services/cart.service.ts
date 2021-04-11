import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Product } from 'src/app/shared/models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: any = {};
  totalItems: number = 0;

  baseUrl = environment.apiBaseUrl;
  cartUrl: string = 'addToCart';

  constructor(private http: HttpClient) {}

  calculateTotalItems() {
    this.totalItems = Object.keys(this.cart).reduce((total, productkey) => {
      return total + this.cart[productkey].quantity;
    }, 0);
  }

  addToCart(product: Product): Observable<boolean> {
    return this.http
      .post<boolean>(`${this.baseUrl}/${this.cartUrl}`, { id: product.id })
      .pipe(
        catchError(() => of(false)),
        tap((response) => {
          if (response) {
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
        })
      );
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
