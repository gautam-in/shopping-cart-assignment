import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart-services/cart.service';
import { LoginService } from 'src/app/shared/services/login-services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  noOfItems: number;
  isLoggedIn: boolean;
  skipLinkPath: string;
  constructor(
    private cartService: CartService,
    private loginService: LoginService,
    private router: Router,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    // this.skipLinkPath = `${this.router.url}#main-content`;

    this.loginService.notifyLogin.subscribe((isLoggedIn: boolean) => {
      this.isLoggedIn = isLoggedIn;
    });

    this.cartService.getCartItem.subscribe((data) => {
      this.noOfItems = data.reduce(
        (previousVal, currentVal) => previousVal + currentVal.count,
        0
      );
    });
  }

  onSignOut() {
    this.loginService.logout();
    this.cartService.clearCartItems();
    this.router.navigate(['/login']);
  }

  onClickCart() {
    this.cartService.show();
  }

  setFocusOnMain(event) {
    // event.preventDefault();
    this.renderer.selectRootElement('#main-content', true).focus();
  }
}
