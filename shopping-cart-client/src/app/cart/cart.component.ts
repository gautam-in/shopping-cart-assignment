import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { CartProducts } from '../models/CartProducts';
import { CartService } from '../services/cart-services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, AfterViewInit {
  productsInCart: CartProducts[];
  checkoutAmont: number;

  @ViewChild('closebtn') closebtn: ElementRef;

  constructor(private cartService: CartService, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.renderer.selectRootElement('#closebtn', true).focus();
  }

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
    this.renderer.selectRootElement('#miniCartBtn', true).focus();
    this.cartService.hide();
  }

  onCloseBtnKeyDown(event: KeyboardEvent) {
    if (event.key === 'Tab' && event.shiftKey) {
      event.preventDefault();
      if (this.productsInCart.length) {
        this.renderer.selectRootElement('#checkOutBtn', true).focus();
      } else {
        this.renderer.selectRootElement('#emptycartBtn', true).focus();
      }
    }
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Tab' && !event.shiftKey) {
      event.preventDefault();
      this.renderer.selectRootElement('#closebtn', true).focus();
    }
  }
}
