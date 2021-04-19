import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppService } from '../shared/services/app.service';
import { CartService } from '../shared/services/cart/cart.service';
import { IProduct } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  product: any = [];
  category: any = [];
  itemInCart: any = [];

  product_server_url = 'server/products/index.get.json';
  category_server_url = 'server/categories/index.get.json';

  constructor(
    private _http: HttpClient,
    private _appService: AppService,
    private _cartService: CartService
  ) {}

  addProductToCart(product: IProduct) {
    this.itemInCart = JSON.parse(this._appService.getLocalItem('cartItem'));
    if (this.itemInCart && this.itemInCart != null) {
      this.itemInCart.push(product);
      this._appService.setLocalItem(
        'cartItem',
        JSON.stringify(this.itemInCart)
      );
    } else {
      let y: IProduct[] = [];
      y.push(product);
      this._appService.setLocalItem('cartItem', JSON.stringify(y));
    }

    this._cartService.setCartList(this.itemInCart);
  }
}
