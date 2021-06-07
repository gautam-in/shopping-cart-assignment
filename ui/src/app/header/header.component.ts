import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/Shared/services/cart.service';
import { LoginService } from 'src/Shared/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  isModal: boolean = false;
  noOfItems: number = 0;
  isLoggedIn: boolean = false;
  constructor(private router: Router, private loginService: LoginService, private cartService: CartService) { }

  ngOnInit(): void {
    this.loginService.isLoggedIn.subscribe((response) => {
      this.isLoggedIn = response;
    });
    this.cartService.getCartItem.subscribe((data) => {
      this.noOfItems = data.reduce(
        (previousVal, currentVal) => previousVal + (currentVal.count || 0),
        0
      );
    });
  }
  logOut() {
    this.isLoggedIn = false;
    this.loginService.isLoggedIn.next(false);
    this.router.navigate(['/login']);
  }
  logIn() {
    this.router.navigate(['/login']);
  }
  register() {
    this.router.navigate(['/signup']);
  }

  onClickCart() {
    this.cartService.show();
  }
}
