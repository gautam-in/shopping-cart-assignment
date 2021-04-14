import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from '../shared/component/cart/cart.component';
import { EmptyCartComponent } from '../shared/component/empty-cart/empty-cart.component';
import { CartService } from '../shared/services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  productsInCart: any;

  constructor(
    private _modalService: NgbModal,
    private _cartService: CartService,
    private _route: Router
  ) {}

  ngOnInit(): void {
    this._cartService.getCartList.subscribe((item) => {
      this.productsInCart = item;
    });
  }

  openCart(): void {
    if (this.productsInCart.length > 0) {
      this._route.navigate(['app/cart']);
    } else {
      this._modalService.open(EmptyCartComponent, {
        ariaLabelledBy: 'cartTitle',
      });
    }
  }
}
