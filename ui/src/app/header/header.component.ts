import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/Shared/services/cart.service';
import { LoginServiceService } from 'src/Shared/services/login-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  isModal: boolean = false;
  noOfItems: number = 0;
  setLogOut: boolean = false;
  constructor(private router: Router, private loginService: LoginServiceService,private cartService:CartService) { }

  ngOnInit(): void {
    this.loginService.setLogout.subscribe(response => {
      this.setLogOut = response;
    });
    this.cartService.getCartItem.subscribe((data) => {
      this.noOfItems = data.reduce(
        (previousVal, currentVal) => previousVal + currentVal.count,
        0
      );
    });
  }
  logOut() {
    sessionStorage.removeItem('isLoggedIn');
    this.setLogOut = false;
    this.loginService.logOutFlag(false);
    this.router.navigate(['/login']);
  }
  logIn() {
    this.setLogOut = false;
    this.loginService.logOutFlag(false);
    this.router.navigate(['/login']);
  }
  register() {
    this.setLogOut = false;
    this.loginService.logOutFlag(false);
    this.router.navigate(['/signup']);
  }

  onClickCart() {
   this.cartService.show();
  }
}
