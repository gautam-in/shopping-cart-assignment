import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICartResponse } from './models/cart.model';
import { IBanner } from './models/banner.model';
import { IProduct } from './models/product.model';
import { ICategory } from './models/category.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {

  product: any = [];
  category: any = [];
  itemInCart: any = [];
  private items = new BehaviorSubject<any>([]);
  getCartList = this.items.asObservable();

  constructor(private http: HttpClient) {}

  getBanners(): Observable<IBanner[]> {
    const bannerUrl = 'server/banners/index.get.json';
    return this.http.get<IBanner[]>(bannerUrl);
  } 

  getCatagories(): Observable<ICategory[]> {
    const categoriesUrl = 'server/categories/index.get.json';
    return this.http.get<ICategory[]>(categoriesUrl);
  }

  getProducts(): Observable<IProduct[]> {
    const productsUrl = 'server/products/index.get.json';
    return this.http.get<IProduct[]>(productsUrl);
  }

  getSessionItem(key: string): any {
    return sessionStorage.getItem(key) || null;
  }

  setSessionItem(key: string, value: any): any {
    return sessionStorage.setItem(key, value);
  }

  removeSessionItem(key: string): any {
    return sessionStorage.removeItem(key);
  }

  addProductToCart(product) {
    const itemInCart = JSON.parse(this.getSessionItem('cartItem'));
    if (itemInCart && itemInCart != null) {
      itemInCart.push(product);
      this.setSessionItem(
        'cartItem',
        JSON.stringify(itemInCart)
      );
    } else {
      let newItems: any = [];
      newItems.push(product);
      this.setSessionItem('cartItem', JSON.stringify(newItems));
    }
    this.setCartList(itemInCart);
  }

  setCartList(itm: any) {
    this.items.next(itm);
  }

  getSubscribedCartList() {
    this.getCartList.subscribe((p) => {
      this.itemInCart = p;
    });
  }

  addToCart(product) {
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
      let y: any = [];
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
