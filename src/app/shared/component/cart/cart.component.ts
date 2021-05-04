import { Component, Inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
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

  cartList: Array<{}> = [];
  constructor(
    private modalService: NgbModal,
    private _cartService: CartService,
    private _modalService: NgbModal,
    private _route: Router,
  

  ) {}

  // make one component for cart in stead of two .. show it based on condition.
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

  addProductsToCart(product: IProduct) {
    this._cartService.addProductToCart(product);
  }

  removeProductFromCart(product: IProduct) {
    this._cartService.removeProductsFromCart(product);
  }

  startShopping() {
    this._route.navigate(['/home']);
  }
  resetCart() {}
}
