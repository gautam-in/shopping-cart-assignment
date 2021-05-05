import { Component, Inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap';
import { IProduct } from 'src/models/product.model';
import { CartService } from '../../services/cart/cart.service';
import { EmptyCartComponent } from '../empty-cart/empty-cart.component';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  closeModal: string;
  totalAmount: number;

  cartList: Array<{}> = [];
  constructor(
    private _cartService: CartService,
    private _modalService: NgbModal,
    private _route: Router
  ) {}

  ngOnInit(): void {
    this.getCartList();
  }

  getCartList() {
    this.cartList = this._cartService.itemInCart;
    this.totalAmount = this._cartService.totalAmount;
    if (this.cartList.length == 0) {
      this._modalService.open(EmptyCartComponent, {
        ariaLabelledBy: 'cartTitle',
      });
    }
  }

  addProductsToCart(product: IProduct) {
    this._cartService.addProductToCart(product);
    this.totalAmountOfProduct(product);
  }

  removeProductFromCart(product: IProduct) {
    this._cartService.removeProductsFromCart(product);
    this.totalAmountOfProduct(product);
  }

  totalAmountOfProduct(product : IProduct) {
    this.totalAmount = this._cartService.getTotalAmount(product);
  }

  startShopping() {
    this._route.navigate(['/home']);
  }

  resetCart() {
    this._route.navigate(['/home']);
  }
}
