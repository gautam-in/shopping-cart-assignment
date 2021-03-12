import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login-services/login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanLoad, CanActivate {
  constructor(private router: Router, private loginService: LoginService) {}

  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    return this.checkAuth();
  }

  canLoad(): boolean | Observable<boolean> | Promise<boolean> {
    return this.checkAuth();
  }

  checkAuth(): boolean | Observable<boolean> | Promise<boolean> {
    if (this.loginService.isLoggedIn()) {
      // this.router.navigate(['/home']);
      return true;
    }
    // this.router.navigate(['/login']);
    return false;
  }
}
