import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartProducts } from 'src/app/models/CartProducts';
import { Products } from 'src/app/models/Products';
import { environment } from 'src/environments/environment';

interface Res {
  response: string;
  responseMessage: string;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  apiURL = environment.serverURL;

  showCartSub = new BehaviorSubject<boolean>(false);
  showCart = this.showCartSub.asObservable();

  cartItems = new BehaviorSubject<CartProducts[]>([]);
  getCartItem = this.cartItems.asObservable();

  productsData: Products[] = [];
  productsInCart: CartProducts[] = [];

  constructor() {}

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
      this.addToCartPost().then((res) => {
        if (res.response.toUpperCase() === 'SUCCESS') {
          this.productsInCart = [
            ...this.productsInCart,
            { ...currProduct, count: 1 },
          ];
          this.cartItems.next(this.productsInCart);
        }
      });
    }
  }

  async addToCartPost(): Promise<Res> {
    const res = await fetch(`${this.apiURL}/addToCart`, {
      method: 'POST',
    }).then((res) => res.json());
    return res;
  }

  modifyItem(count: number, id: string) {
    const currProduct = this.productsInCart.findIndex((x) => x.id === id);
    if (currProduct > -1) {
      this.productsInCart[currProduct].count += count;
      if (this.productsInCart[currProduct].count === 0) {
        this.productsInCart.splice(currProduct, 1);
      }
      this.cartItems.next(this.productsInCart);
    }
  }

  clearCartItems() {
    this.cartItems.next([]);
  }
}
