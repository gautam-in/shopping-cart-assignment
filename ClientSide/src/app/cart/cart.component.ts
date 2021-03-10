import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { CartProducts } from '../models/CartProducts';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, AfterViewInit {
  showModal: boolean;
  productsInCart: CartProducts[];
  checkoutAmont: number;

  @ViewChild('closebtn') closebtn: ElementRef;

  constructor(private cartService: CartService, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    // this.renderer.selectRootElement(this.closebtn, true).focus();
  }

  ngOnInit(): void {
    this.cartService.showCart.subscribe((data) => {
      this.showModal = data;
      // this.renderer.selectRootElement('#closebtn', true).focus();

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
