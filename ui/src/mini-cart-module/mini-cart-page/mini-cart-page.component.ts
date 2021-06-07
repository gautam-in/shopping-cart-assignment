import { Component, OnInit } from '@angular/core';
import { CartProduct } from 'src/Shared/models/CartProduct';
import { Product } from 'src/Shared/models/Product';
import { CartService } from 'src/Shared/services/cart.service';

@Component({
  selector: 'app-mini-cart-page',
  templateUrl: './mini-cart-page.component.html',
  styleUrls: ['./mini-cart-page.component.sass']
})
export class MiniCartPageComponent implements OnInit {
  productsInCart: CartProduct[] = [];
  checkoutAmont: number = 0;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCartItem.subscribe((data) => {
      this.productsInCart = data;
      this.checkoutAmont = this.productsInCart.reduce(
        (previousVal, currentVal) =>
          previousVal + (currentVal.product.price || 0) * (currentVal.count || 0),
        0
      );
    });
  }
  onClose() {
    this.cartService.hide();
  }
  removeItemToCart(productId: string, count: number) {
    this.cartService.removeItemToCart(productId, count);
  }
  addItemToCart(productId: string, count: number, product: Product) {
    this.cartService.addItemToCart(productId, count, product);
  }
}
