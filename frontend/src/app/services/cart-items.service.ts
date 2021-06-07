import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { Product } from '../interfaces/product';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CartItemsService {
  cartProducts: any = [];
  private cartProductList = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) {}
  // POST method to add products to cart
  addProduct = (product: Product) => {
    this.http
      .post(`${environment.port}` + '/addToCart', product.id)
      .subscribe((res) => {
        if (res) {
          product.count = 1;
          product.pricePerQty = this.calculatePricePerQty(
            product.count,
            product.price
          );
          this.cartProducts.push(product);
          this.cartProductList.next(this.cartProducts);
        }
      });
  };

  // get all products added to cart
  getCartProduct(): Observable<Product[]> {
    return this.cartProductList.asObservable();
  }

  getCartList(): Product[] {
    this.cartProductList.subscribe((itemInCart: Product[]) => {
      this.cartProducts = itemInCart;
    });
    return this.cartProducts;
  }

  incrementCartItem(i): void {
    this.getCartList();
    this.cartProducts[i].count++;
    this.cartProducts[i].pricePerQty = this.calculatePricePerQty(
      this.cartProducts[i].count,
      this.cartProducts[i].price
    );

    this.getTotalPrice();
  }

  decrementCartItem(i): void {
    this.getCartList();
    this.cartProducts[i].count--;
    this.cartProducts[i].pricePerQty = this.calculatePricePerQty(
      this.cartProducts[i].count,
      this.cartProducts[i].price
    );

    this.getTotalPrice();
  }

  // calculate price per quantity of product
  calculatePricePerQty(count, price) {
    return count * price;
  }

  // Calculate total product amount per quantity(after incrementing the quantity)
  getTotalPrice() {
    let amount = 0;
    this.cartProducts.forEach((element) => {
      amount += element.pricePerQty;
    });
    this.cartProducts.totalAmount = amount;
    this.cartProductList.next(this.cartProducts);
    this.getCartList();
  }
}
