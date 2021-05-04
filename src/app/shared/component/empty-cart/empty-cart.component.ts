import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-empty-cart',
  templateUrl: './empty-cart.component.html',
  styleUrls: ['./empty-cart.component.scss'],
})


export class EmptyCartComponent implements OnInit {

  cartList: Array<{}> = [];

  constructor(private _route: Router, public modal: NgbActiveModal,
    private _cartService: CartService,
    ) {}

  ngOnInit(): void {
    this.getCartList();
  }

  getCartList() {
    this._cartService.getCartList.subscribe((data) => {
      this.cartList = data;
    
    });
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
