import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart-services/cart.service';
import { LoginService } from '../services/login-services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isModal: boolean = false;
  noOfItems: number;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private cartService: CartService
  ) {}
  setLogOut: boolean;
  ngOnInit(): void {
    //this.setLogOut=localStorage.getItem('isLoggedIn') == 'true';;

    this.setLogOut = localStorage.getItem('isLoggedIn') == 'true';
    this.loginService.setLogout.subscribe((flag) => {
      this.setLogOut = flag;
    });

    this.loginService.setClosingFlag.subscribe((modal) => {
      this.isModal = modal;
    });

    this.cartService.getCartItem.subscribe((data) => {
      this.noOfItems = data.reduce(
        (previousVal, currentVal) => previousVal + currentVal.count,
        0
      );
    });
  }

  openModal() {
    this.isModal = true;
  }

  logOut() {
    localStorage.setItem('isLoggedIn', JSON.stringify(false));
    this.setLogOut = false;
    this.router.navigate(['/signin']);
  }
  logIn() {
    this.setLogOut = localStorage.getItem('isLoggedIn') == 'true';
    this.router.navigate(['/signin']);
  }
  register() {
    this.setLogOut = localStorage.getItem('isLoggedIn') == 'true';
    this.setLogOut = false;
    this.router.navigate(['/register']);
  }

  onClickCart() {
    this.cartService.show();
  }
}
