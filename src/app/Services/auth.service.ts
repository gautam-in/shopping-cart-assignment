import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticatedUser = false;
  registeredUser;
  constructor(
    private _dataService: DataService,
    private router: Router
  ) { }

  authenticateUser(loggedInUserEmail: string, loggedInUserPassword: string) {
    this.registeredUser = JSON.parse(localStorage.getItem('registeredUser'));
    if (loggedInUserEmail === this.registeredUser.email && loggedInUserPassword === this.registeredUser.password) {
      this.isAuthenticatedUser = true;
      this._dataService.isLoggedInSubject.next({ isLoggedIn: true, userName: this.registeredUser.firstName });
      this.router.navigate(['/home']);
    } else if (loggedInUserEmail === 'admin@gmail.com' && loggedInUserPassword === 'admin123') {
      this.isAuthenticatedUser = true;
      this._dataService.isLoggedInSubject.next({ isLoggedIn: true, userName: 'Admin' });
      this.router.navigate(['/home']);
    } else {
      this.isAuthenticatedUser = false;
      this._dataService.isLoggedInSubject.next({ isLoggedIn: false, userName: '' });
      alert('User not found. Please register');
      this.router.navigate(['auth/register']);
    }
  }
}
