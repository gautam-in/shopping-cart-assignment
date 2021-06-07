import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../interfaces/product';
import { CartItemsService } from '../services/cart-items.service';

@Component({
  selector: 'app-product-cart-modal',
  templateUrl: './product-cart-modal.component.html',
  styleUrls: ['./product-cart-modal.component.scss'],
})
export class ProductCartModalComponent implements OnInit {
  cartItems: any = [];
  cartSubscription = new Subscription();
  totalAmt = 0;

  constructor(private miniCart: CartItemsService) {}

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems(): void {
    this.cartItems = this.miniCart.getCartList();

    // calculate total amount before incrementing the quantity of any product
    this.cartItems.forEach((res: Product) => {
      this.totalAmt += res.pricePerQty;
    });
  }

  increment(index): void {
    this.miniCart.incrementCartItem(index);
    this.cartItems = this.miniCart.getCartList();
    this.totalAmt = this.cartItems.totalAmount;
  }

  decrement(index): void {
    this.miniCart.decrementCartItem(index);
    this.cartItems = this.miniCart.getCartList();
    this.totalAmt = this.cartItems.totalAmount;
  }
}
