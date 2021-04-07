import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Register } from 'src/app/register/register.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  setClosingFlag = new Subject<boolean>();
  dataArray: Register[] = [];
  isLoginFlag: boolean = false;
  setLogout = new Subject<boolean>();
  constructor() {}
  saveRegisterationData(user: Register) {
    if (localStorage.getItem('userData')) {
      this.dataArray = JSON.parse(localStorage.getItem('userData') || '{}');
    }
    this.dataArray.push(user);
    localStorage.setItem('userData', JSON.stringify(this.dataArray));
  }

  isLoggedIn() {
    let flag = localStorage.getItem('isLoggedIn') === 'true';
    return flag;
  }
  setLoginFlag(flag: boolean) {
    this.isLoginFlag = flag;

    this.setLogout.next(flag);
  }
  checckLoginCred(userLogin: Register) {
    let userDetails = localStorage.getItem('userData')
      ? JSON.parse(localStorage.getItem('userData') || '{}')
      : '';

    if (userDetails) {
      for (let user of userDetails) {
        if (
          user.email === userLogin.email &&
          user.password === userLogin.password
        ) {
          return true;
        }
      }
    }
    return false;
  }

  setCloseFlag(flag) {
    this.setClosingFlag.next(flag);
  }
}
