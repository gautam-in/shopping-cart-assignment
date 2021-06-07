import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CartProduct } from '../models/CartProduct';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  addToCartUrl: string = `${environment.apiUrl}/addToCart`;
  productsUrl: string = `${environment.apiUrl}/products`;

  productsInCart: CartProduct[] = [];

  cartItems = new BehaviorSubject<CartProduct[]>([]);
  getCartItem = this.cartItems.asObservable();

  showCartSub = new BehaviorSubject<boolean>(false);
  showCart = this.showCartSub.asObservable();
  constructor(private httpClient: HttpClient) {
  }
  show() {
    this.showCartSub.next(true);
  }

  hide() {
    this.showCartSub.next(false);
  }
  removeItemToCart(id: string, count: number = 1) {
    const productAlreadypresent = this.productsInCart.findIndex(
      (x) => x.product.id === id
    );
    if (productAlreadypresent > -1) {
      this.productsInCart[productAlreadypresent].count -= count;
      if (this.productsInCart[productAlreadypresent].count === 0) {
        this.productsInCart.splice(productAlreadypresent, 1);
      }
      this.cartItems.next(this.productsInCart);
    }
  }
  addItemToCart(id: string, count: number = 1, currProduct: Product) {
    /**
     * If item is already present in the cart
     * then find the item and increase the count
     */
    const productAlreadypresent = this.productsInCart.findIndex(
      (x) => x.product.id === id
    );
    if (productAlreadypresent > -1) {
      this.productsInCart[productAlreadypresent].count += count;
      this.cartItems.next(this.productsInCart);
    } else {
      /**
       * If item is not already present in the cart
       * then add the item by making API call and increase the count
       */
      this.addToCart().subscribe((res) => {
        if (res.response.toUpperCase() === 'SUCCESS') {
          const newprod: CartProduct = { product: currProduct, count: 1 };
          this.productsInCart.push(newprod);
          this.cartItems.next(this.productsInCart);
        }
      });
    }
  }
  addToCart(): Observable<any> {
    return this.httpClient.post<any>(this.addToCartUrl, '')
      .pipe(response => response);
  }
}
