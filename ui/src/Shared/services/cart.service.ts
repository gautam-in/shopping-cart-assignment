import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CartProducts } from '../models/CartProducts';
import { Products } from '../models/Products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  apiURL: string = environment.apiUrl;
  addToCartUrl: string = `${this.apiURL}/addToCart`;
  productsUrl: string = `${this.apiURL}/products`;

  productsInCart: CartProducts[] = [];

  cartItems = new BehaviorSubject<CartProducts[]>([]);
  getCartItem = this.cartItems.asObservable();

  showCartSub = new BehaviorSubject<boolean>(false);
  showCart = this.showCartSub.asObservable();
  productsData: Products[] = [];
  constructor(private httpClient: HttpClient) {
    this.getProducts().subscribe(res => {
      this.productsData = res;
    })
  }
  show() {
    this.showCartSub.next(true);
  }

  hide() {
    this.showCartSub.next(false);
  }
  addItemToCart(id: string, count: number = 1) {
    /**
     * If item is already present in the cart
     * then find the item and increase the count
     */
    const productAlreadypresent = this.productsInCart.findIndex(
      (x) => x.id === id
    );
    if (productAlreadypresent > -1) {
      this.productsInCart[productAlreadypresent].count += count;
      if (this.productsInCart[productAlreadypresent].count === 0) {
        this.productsInCart.splice(productAlreadypresent, 1);
      }
      this.cartItems.next(this.productsInCart);
    } else {
      /**
       * If item is not already present in the cart
       * then add the item by making API call and increase the count
       */
      const currProduct = this.productsData.find((x) => x.id === id);
      this.addToCartPost().subscribe((res) => {
        if (res.response.toUpperCase() === 'SUCCESS') {
          const newprod = { ...currProduct, count: 1 };
          this.productsInCart.push(newprod);
          this.cartItems.next(this.productsInCart);
        }
      });
    }
  }
  addToCartPost(): Observable<any> {
    return this.httpClient.post<any>(this.addToCartUrl, '')
      .pipe(response => response);
  }
  getProducts(): Observable<Products[]> {
    return this.httpClient.get<Products[]>(this.productsUrl)
      .pipe(response => response);
  }
}
