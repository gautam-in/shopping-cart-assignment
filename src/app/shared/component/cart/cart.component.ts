import { Component, Inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import {  MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
//import { MatDialogRef } from '@angular/material/dialog/dialog-ref';
import {
  ModalDismissReasons,
  //NgbActiveModal,
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap';
import { CartService } from '../../services/cart/cart.service';
//import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

// interface DialogData {
//   email: string;
// }
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
    //public modal: NgbActiveModal,
    private _route: Router
  ) {}
  ngOnInit(): void {
    this.getCartList();
  }

  getCartList() {
    this._cartService.getCartList.subscribe((data) => {
      this.cartList = data;
    });
  }

  addProductsToCart(product) {
    this._cartService.addProductToCart(product);
  }

  removeProductFromCart(product) {
    this._cartService.removeProductsFromCart(product);
  }

  startShopping() {
    this._route.navigate(['app/home']);
  }
  resetCart() {}
}
