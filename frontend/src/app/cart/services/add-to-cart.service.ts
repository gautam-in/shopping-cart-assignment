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
  private numberOfProductsInCart = new BehaviorSubject<ProductsListDTO[]>([]);
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

  addProductsInCart(product: ProductsListDTO) {
    this.addToCartSendDataToAPI$().subscribe((data) => {
      if (data.response === 'Success') {
        const currentValue = this.numberOfProductsInCart.value;
        const updatedValue = [...currentValue, product];
        this.numberOfProductsInCart.next(updatedValue);
      }
    });
  }

  removeProductsFromCart(product: ProductsListDTO) {
    let changedValue: any;
    this.numberOfProductsInCart.subscribe((productList) => {
      const index = productList.indexOf(product);
      if(index > -1) {
        productList.splice(index, 1);
      }
      changedValue = [...productList];
      // productList.filter((product) => productList.pop(productId))
      // changedValue = productList.filter((product) => product.id !== productId);
    });
    this.numberOfProductsInCart.next([...changedValue]);
  }

  resetCart() {
    this.numberOfProductsInCart.next([]);
  }
}
