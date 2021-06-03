import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  signedIn(tokenValue: string): void {
    localStorage.setItem('currentUser', tokenValue);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }

  // logout() {
  //   localStorage.removeItem('currentUser');
  // }
}
