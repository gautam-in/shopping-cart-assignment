import { Component, Inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from '../../services/cart/cart.service';
import { EmptyCartComponent } from '../empty-cart/empty-cart.component';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  closeModal: string;

  cart: any = 'ad';
  cartList: any = [];
  constructor(
    private modalService: NgbModal,
    private _cartService: CartService,
    private _modalService: NgbModal,
    private _route: Router
  ) {}
  ngOnInit(): void {
    this.getCartList();
  }

  getCartList() {
    this._cartService.getCartList.subscribe((data) => {
      this.cartList = data;
      if (this.cartList.length == 0) {
        this._modalService.open(EmptyCartComponent, {
          ariaLabelledBy: 'cartTitle',
        });
      }
    });
  }

  addProductsToCart(product) {
    this._cartService.addProductToCart(product);
  }

  removeProductFromCart(product) {
    this._cartService.removeProductsFromCart(product);
  }

  startShopping() {
    this._route.navigate(['/home']);
  }
  resetCart() {}
}
