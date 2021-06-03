import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  currUser: User = { email: '', password: '' };
  setLogout = new Subject<boolean>();
  dataArray: User[] = [];
  constructor() { }
  checkLoginCred(user: User) {
    if (localStorage.getItem('userDetails')) {
      var userDetails = JSON.parse(localStorage.getItem('userDetails') || '[]');
      var first = userDetails.filter((data: any) => data.email == user.email
      );
      if (first.length > 0 && first.filter((data: any) => data.password == user.password).length > 0) {
        sessionStorage.setItem('isLoggedIn', String(true));
        this.logOutFlag(true);
        return true;
      }
      else
        return false;
    }
    else
      return false;
  }
  logOutFlag(value: boolean) {
    this.setLogout.next(value);
  }
  saveRegisterationData(user: User) {
    if (localStorage.getItem('userDetails')) {
      this.dataArray = JSON.parse(localStorage.getItem('userDetails') || '[]');
    }
    this.dataArray.push(user);
    localStorage.setItem('userDetails', JSON.stringify(this.dataArray));
  }
}
