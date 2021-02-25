import { CartItem } from './../cart-items.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductsListDTO } from 'src/app/products/models/products-list';
import { baseAPIPath } from 'src/config';

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
    let isProductPresentInCart = true;
    console.log(productItem);
    this.addToCartSendDataToAPI$().subscribe((data) => {
      if (data.response === 'Success') {
        currentValue = this.numberOfProductsInCart.value;
        console.log(currentValue, 'currentvalue');
        if (currentValue.length === 0) {
          updatedValue = [...currentValue, productItem];
          this.numberOfProductsInCart.next(updatedValue);
          console.log('only first time');
        } else {
          debugger;
          let index = [...currentValue].indexOf(productItem);
          console.log(index, 'index')
          if (index > -1) {
            [...currentValue].forEach((product) => {
              if (
                product.id === productItem.id &&
                product.category === productItem.category
              ) {
                ++product.count;
                product.totalPrice = product.price * product.count;
              }
            });
          } else {
            this.numberOfProductsInCart.next([...currentValue, productItem]);
          }
        }
      }
    });
  }

  removeProductsFromCart(product: CartItem) {
    console.log('remove');
    // let changedValue: any;
    // this.numberOfProductsInCart.subscribe((productList) => {
    //   const index = productList.indexOf(product);
    //   if(index > -1) {
    //     productList.splice(index, 1);
    //   }
    //   changedValue = [...productList];
    //   // productList.filter((product) => productList.pop(productId))
    //   // changedValue = productList.filter((product) => product.id !== productId);
    // });
    // this.numberOfProductsInCart.next([...changedValue]);
  }

  resetCart() {
    this.numberOfProductsInCart.next([]);
  }
}
