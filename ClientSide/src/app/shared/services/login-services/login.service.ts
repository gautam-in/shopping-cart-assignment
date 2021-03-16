import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from '../cart-services/cart.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loginSub = new BehaviorSubject<boolean>(false);
  public notifyLogin = this.loginSub.asObservable();

  constructor() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.login();
    }
  }

  login() {
    this.loginSub.next(true);
  }

  setUserData(userData?) {
    localStorage.setItem('userEmail', userData.email);
    localStorage.setItem('isLoggedIn', 'true');
    this.login();
  }

  isLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  logout() {
    localStorage.clear();
    this.loginSub.next(false);
  }
}
