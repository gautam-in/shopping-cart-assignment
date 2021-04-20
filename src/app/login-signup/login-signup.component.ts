import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmptyCartModalComponent } from '../cart/empty-cart-modal/empty-cart-modal.component';

@Component({
  selector: 'login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss'],
})
export class LoginSignupComponent implements OnInit {
  productsInCart: any;

  constructor(
    private _route: Router,
    private _appService: AppService,
    private _modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this._appService.getCartList.subscribe((item) => {
      this.productsInCart = item;
    });
  }

  openCart(): void {
    if (this.productsInCart.length > 0) {
      this._route.navigate(['SabkaBaZaar/cart']);
    } else {
      this._modalService.open(EmptyCartModalComponent, {
        ariaLabelledBy: 'cartTitle',
      });
    }
  }
}
