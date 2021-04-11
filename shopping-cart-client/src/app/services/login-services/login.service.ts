import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Register } from 'src/app/register/register.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  setClosingFlag = new Subject<boolean>();
  dataArray = [];
  isLoginFlag: boolean = false;
  setLogout = new Subject<boolean>();
  constructor() {}
  saveRegisterationData(user) {
    if (localStorage.getItem('userData')) {
      this.dataArray = JSON.parse(localStorage.getItem('userData') || '{}');
    }
    this.dataArray.push(user);
    localStorage.setItem('userData', JSON.stringify(this.dataArray));
  }

  setLogOutFlag(){
    localStorage.setItem('isLoggedIn', JSON.stringify(false));
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
      var first = userDetails.find(data=>{
          return data[userLogin.email]
        });
      if(first){
      return first[userLogin.email].password === userLogin.password;
      }
      return false;
    }
  }
}
