import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IProduct } from 'src/models/product.model';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-empty-cart',
  templateUrl: './empty-cart.component.html',
  styleUrls: ['./empty-cart.component.scss'],
})
export class EmptyCartComponent implements OnInit {
  cartList: Array<{}> = [];
  totalAmount: number;

  constructor(
    private _route: Router,
    public modal: NgbActiveModal,
    private _cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getCartList();
    this.totalAmount = this._cartService.totalAmount;
  }

  getCartList() {
    this.cartList = this._cartService.itemInCart;
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
    this.modal.dismiss('Cross click');
  }

  resetCart() {
    this._route.navigate(['/home']);
    this.modal.dismiss('Cross click');
  }
}
