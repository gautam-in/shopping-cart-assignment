import { CartItem } from '../cart-items.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddToCartService {
  constructor(private http: HttpClient) {}

  private numberOfProductsInCart = new BehaviorSubject<CartItem[]>([]);
  productsInCart$ = this.numberOfProductsInCart.asObservable();

  addToCartSendDataToAPI$() {
    return of({
      response: 'Success',
      responseMessage: 'Product added to cart successfully',
    });
    // return this.http
    //   .post(`${baseAPIPath}/addToCart`, {
    //     productid: '5b6c6a7f01a7c38429530883',
    //   })
    //   .pipe(
    //     map(() => ({
    //       response: 'Success',
    //       responseMessage: 'Product added to cart successfully',
    //     }))
    //   );
  }

  addProductsInCart(productItem: CartItem) {
    let currentValue: any;
    let updatedValue: any;
    this.addToCartSendDataToAPI$().subscribe((data) => {
      if (data.response === 'Success') {
        currentValue = this.numberOfProductsInCart.value;
        if (currentValue.length === 0) {
          updatedValue = [...currentValue, productItem];
          this.numberOfProductsInCart.next(updatedValue);
        } else {
          let index = [...currentValue].indexOf(productItem);
          if (index > -1) {
            [...currentValue].forEach((product) => {
              if (
                product.id === productItem.id &&
                product.category === productItem.category
              ) {
                ++product.count;
                product.totalPrice = product.price * product.count;
                this.numberOfProductsInCart.next([...currentValue]);
              }
            });
          } else {
            this.numberOfProductsInCart.next([...currentValue, productItem]);
          }
        }
      } else {
        console.log('some error occured');
      }
    });
  }

  removeProductsFromCart(product: CartItem) {
    let currentValue = this.numberOfProductsInCart.value;
    let index = [...currentValue].indexOf(product);
    if (index > -1) {
      [...currentValue].forEach((productItem) => {
        if (
          productItem.id === product.id &&
          productItem.category === product.category
        ) {
          if (product.count === 1) {
            currentValue = [...currentValue].filter((p) => p.id !== product.id);
            return;
          }
          --product.count;
          product.totalPrice = product.totalPrice - product.price;
        }
      });
      this.numberOfProductsInCart.next([...currentValue]);
    } else {
      console.log('product not found');
    }
  }

  resetCart() {
    this.numberOfProductsInCart.next([]);
  }

  getTotalPriceToCheckout(): number {
    let grandTotal: number = 0;
    this.productsInCart$.subscribe((productList) => {
      productList.forEach((product) => {
        grandTotal = product.totalPrice + grandTotal;
      });
    });
    return grandTotal;
  }
}
