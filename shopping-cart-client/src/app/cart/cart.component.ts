import {
  Component,
  OnInit,
  Renderer2,
} from '@angular/core';
import { CartProducts } from '../models/CartProducts';
import { CartService } from '../services/cart-services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  productsInCart: CartProducts[];
  checkoutAmont: number;
  constructor(private cartService: CartService) {}
  ngOnInit(): void {
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
    //this.renderer.selectRootElement('#miniCartBtn', true).focus();
    this.cartService.hide();
  }
}
