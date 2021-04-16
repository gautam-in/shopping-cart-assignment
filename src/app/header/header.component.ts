import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from '../shared/component/cart/cart.component';
import { EmptyCartComponent } from '../shared/component/empty-cart/empty-cart.component';
import { AppService } from '../shared/services/app.service';
import { CartService } from '../shared/services/cart/cart.service';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  productsInCart: any;
  isLoggedIn: boolean = false;
  user: any;

  constructor(
    private _modalService: NgbModal,
    private _cartService: CartService,
    private _route: Router,
    private _userService: UserService
  ) {}

  ngOnInit(): void {
    this.getUser();
    this._cartService.getCartList.subscribe((item) => {
      this.productsInCart = item;
    });
  }

  getUser() {
    // this._userService.getUser.subscribe((u) => {
    //   this.user = u;
    // });
    this.user= this._userService.getSignedInUser()
    if (this.user !== '' || this.user != null) {
      this.isLoggedIn = true;
    }
  }

  logoutUser() {
    this._userService.logout();
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
