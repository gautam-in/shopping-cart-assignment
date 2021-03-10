import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loginSub = new BehaviorSubject<boolean>(false);
  public notifyLogin = this.loginSub.asObservable();
  isLoggedIn: boolean;

  constructor() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.isLoggedIn = true;
      this.login();
    }
  }

  login() {
    this.loginSub.next(true);
  }

  logout() {
    this.loginSub.next(false);
  }
}
