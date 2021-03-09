import { IProduct } from './../model/product.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  groceryCart: IProduct[] = [];

  constructor(
    private _cartService: CartService,
    private router: Router
  ) { }

  ngOnInit() {
    this._cartService.cartItems$.subscribe((data: IProduct[]) => {
      this.groceryCart = data;
    });
    this._cartService.totalItemPrice();
  }

  increaseProductQuantity(product: IProduct) {
    return this._cartService.increaseProductQuantity(product);
  }

  removeProductFromCart(product: IProduct) {
    return this._cartService.removeProductFromCart(product);
  }

  totalAmount() {
    return this._cartService.totalAmount();
  }

  totalItemPrice() {
    return this._cartService.totalItemPrice();
  }

  resetCart() {
    this._cartService.resetCart();
    this.router.navigate(['/home']);
  }
}
