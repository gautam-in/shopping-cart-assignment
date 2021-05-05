import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IProduct } from 'src/models/product.model';
import { IUser } from 'src/models/user.model';
import { AuthService } from '../auth/auth.service';
import { CartComponent } from '../shared/component/cart/cart.component';
import { EmptyCartComponent } from '../shared/component/empty-cart/empty-cart.component';
import { CartService } from '../shared/services/cart/cart.service';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  productsInCart: IProduct[] = [];
  isLoggedIn: boolean = false;
  user: IUser;

  public screenWidth: any;

  constructor(
    private _modalService: NgbModal,
    private _cartService: CartService,
    private _route: Router,
    private _userService: UserService,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getUser();
    this.productsInCart = this._cartService.itemInCart;
  }

  getUser() {
    this.user = this._userService.getSignedInUser();
    if (this.user) {
      this.isLoggedIn = true;
    }
  }

  logoutUser() {
    this.isLoggedIn = false;
    this._authService.logout();
  }

  openCart(): void {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 1024 && this.screenWidth >= 768) {
      this._route.navigate(['/auth/cart']);
    } else {
      this._modalService.open(EmptyCartComponent, {
        ariaLabelledBy: 'cartTitle',
      });
    }
  }
}
