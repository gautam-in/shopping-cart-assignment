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
  numberOfproductsInCart$ = this.numberOfProductsInCart.asObservable();
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
    this.addToCartSendDataToAPI$().subscribe(data => {
      if(data.response === "Success"){
        const currentValue = this.numberOfProductsInCart.value;
        const updatedValue = [...currentValue, product];
        this.numberOfProductsInCart.next(updatedValue)
      }
    })
  }

  resetCart() {
    this.numberOfProductsInCart.next([]);
  }
}
