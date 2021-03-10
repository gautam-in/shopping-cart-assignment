import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  noOfItems: number;
  isLoggedIn: boolean;
  constructor(
    private cartService: CartService,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
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
    localStorage.clear();
    this.loginService.isLoggedIn = false;
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

  onClickCart() {
    this.cartService.show();
  }
}
