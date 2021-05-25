import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  signedIn(tokenValue: string) {
    localStorage.setItem('currentUser', tokenValue);
  }

  isLoggedIn() {
    return localStorage.getItem('currentUser') !== null;
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
