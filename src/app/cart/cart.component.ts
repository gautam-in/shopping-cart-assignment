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
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((data: IProduct[]) => {
      this.groceryCart = data;
    });
    this.cartService.totalItemPrice();
  }

  increaseProductQuantity(product: IProduct): any {
    return this.cartService.increaseProductQuantity(product);
  }

  removeProductFromCart(product: IProduct): any {
    return this.cartService.removeProductFromCart(product);
  }

  totalAmount(): any {
    return this.cartService.totalAmount();
  }

  totalItemPrice(): any {
    return this.cartService.totalItemPrice();
  }

  resetCart(): void {
    this.cartService.resetCart();
    this.router.navigate(['/home']);
  }
}
