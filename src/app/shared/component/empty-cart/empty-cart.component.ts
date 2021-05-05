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
    this.totalAmountOfProduct();
  }

  getCartList() {
    this.cartList = this._cartService.itemInCart;
  }

  addProductsToCart(product: IProduct) {
    this._cartService.addProductToCart(product);
    this.totalAmountOfProduct();
  }

  removeProductFromCart(product: IProduct) {
    this._cartService.removeProductsFromCart(product);
    this.totalAmountOfProduct();
  }

  totalAmountOfProduct() {
    this.totalAmount = this._cartService.getTotalAmount();
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
