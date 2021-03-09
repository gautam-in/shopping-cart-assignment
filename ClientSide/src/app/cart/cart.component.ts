import { Component, OnInit } from '@angular/core';
import { CartProducts } from '../models/CartProducts';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  showModal: boolean;
  productsInCart: CartProducts[];
  checkoutAmont: number;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.showCart.subscribe((data) => {
      this.showModal = data;
    });

    this.cartService.getCartItem.subscribe((data) => {
      this.productsInCart = data;
      this.checkoutAmont = this.productsInCart.reduce(
        (previousVal, currentVal) =>
          previousVal + currentVal.price * currentVal.count,
        0
      );
    });
  }

  addItemToCart(productId: string, count: number) {
    this.cartService.addItemToCart(productId, count);
  }

  onClose() {
    // showModal = !showModal;
    this.cartService.hide();
  }
}
