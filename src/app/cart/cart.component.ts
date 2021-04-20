import { Component, Inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmptyCartModalComponent } from './empty-cart-modal/empty-cart-modal.component';
import { AppService } from '../app.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartList: any = [];

  constructor(
    private modalService: NgbModal,
    private _cartService: AppService,
    private _modalService: NgbModal,
    private _route: Router
  ) {}

  ngOnInit(): void {
    this.getCartList();
  }

  getCartList() {
    this._cartService.getCartList.subscribe((data) => {
      this.cartList = data;
      console.log(this.cartList);
      
      if (this.cartList.length == 0) {
        this._modalService.open(EmptyCartModalComponent, {
          ariaLabelledBy: 'cartTitle',
        });
      }
    });
  }

  addProductsToCart(product) {
    this._cartService.addToCart(product);
  }

  removeProductFromCart(product) {
    this._cartService.removeProductsFromCart(product);
  }

  startShopping() {
    this._route.navigate(['SabkaBaZaar/home']);
  }
 
}
