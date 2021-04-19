import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from 'src/models/product.model';
import { AppService } from '../app.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  itemInCart: any = [];

  private items = new BehaviorSubject<any>([]);
  getCartList = this.items.asObservable();

  setCartList(itm: IProduct) {
    this.items.next(itm);
  }

  constructor(private _appService: AppService) {}

  getSubscribedCartList() {
    this.getCartList.subscribe((p) => {
      this.itemInCart = p;
    });
  }

  addProductToCart(product) {
    this.getSubscribedCartList();

    if (this.itemInCart != null && this.itemInCart.length > 0) {
      this.itemInCart.forEach((element) => {
        if (element.id == product.id && element.count) {
          element.count++;
          element.productPrice = this.getProductPrice(
            element.price,
            element.count
          );
        }
      });
      if (!this.itemInCart.find((x) => x.id == product.id)) {
        product.count = 1;
        product.productPrice = product.price;
        this.itemInCart.push(product);
      }
      this.getTotalAmount();
    } else {
      product.count = 1;
      product.productPrice = product.price;
      this.itemInCart.push(product);
      this.getTotalAmount();
    }
  }

  removeProductsFromCart(product) {
    this.itemInCart.forEach((element) => {
      if (element.id == product.id && element.count > 1) {
        element.count--;
        element.productPrice = this.getProductPrice(
          element.price,
          element.count
        );
      } else if (element.id == product.id) {
        this.itemInCart.pop(element);
      }
      this.getTotalAmount();
    });
    this.getTotalAmount();
  }

  getProductPrice(price, count): any {
    let totalPrice = price * count;
    return totalPrice;
  }

  getTotalAmount() {
    let amount = 0;
    this.itemInCart.forEach((element) => {
      amount += element.productPrice;
    });
    this.itemInCart.totalAmount = amount;
    this.setCartList(this.itemInCart);
    this.getSubscribedCartList();
  }
}
