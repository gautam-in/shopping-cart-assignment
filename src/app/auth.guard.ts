import { AuthService } from './services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _authService: AuthService,
    private router: Router
  ) { }

  canActivate() {
    if (this._authService.isAuthenticatedUser) {
      return true;
    } else {
      this.router.navigate(['/auth/signin']);
      return false;
    }
  }

}
