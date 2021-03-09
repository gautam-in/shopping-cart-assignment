import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticatedUser = false;
  constructor(
    private _dataService: DataService,
    private router: Router
  ) { }

  authenticateUser(userEmail: string, password: string) {
    if (userEmail === 'supriya@gmail.com' && password === 'supriya123') {
      this.isAuthenticatedUser = true;
      this._dataService.isLoggedInSubject.next(true);
      this.router.navigate(['/home']);
    } else {
      this.isAuthenticatedUser = false;
      this._dataService.isLoggedInSubject.next(false);
      alert('incorrect email or password');
    }
  }
}
