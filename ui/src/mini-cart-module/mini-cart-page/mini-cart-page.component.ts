import { Component, OnInit } from '@angular/core';
import { CartProducts } from 'src/Shared/models/CartProducts';
import { CartService } from 'src/Shared/services/cart.service';

@Component({
  selector: 'app-mini-cart-page',
  templateUrl: './mini-cart-page.component.html',
  styleUrls: ['./mini-cart-page.component.sass']
})
export class MiniCartPageComponent implements OnInit {
  productsInCart: CartProducts[] = [];
  checkoutAmont: number = 0;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCartItem.subscribe((data) => {
      this.productsInCart = data;
      this.checkoutAmont = this.productsInCart.reduce(
        (previousVal, currentVal) =>
          previousVal + (currentVal.price || 0) * currentVal.count,
        0
      );
    });
  }
  onClose() {
    this.cartService.hide();
  }

  addItemToCart(productId: string, count: number) {
    this.cartService.addItemToCart(productId, count);
  }
}
