import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  currUser: User = { email: '', password: '' };
  isLoggedIn = new BehaviorSubject<boolean>(false);
  userList: User[] = [];
  constructor() { }
  checkLoginCred(user: User) {
    if (localStorage.getItem('userDetails')) {
      const userDetails = JSON.parse(localStorage.getItem('userDetails') || '[]');
      const first = userDetails.filter((data: any) => data.email === user.email
      );
      if (first.length > 0 && first.filter((data: any) => data.password === user.password).length > 0) {
        this.isLoggedIn.next(true);
        return true;
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
  }
  saveRegistrationData(user: User) {
    if (localStorage.getItem('userDetails')) {
      this.userList = JSON.parse(localStorage.getItem('userDetails') || '[]');
    }
    this.userList.push(user);
    localStorage.setItem('userDetails', JSON.stringify(this.userList));
  }
  checkLoggedIn() {
    return this.isLoggedIn;
  }
}
