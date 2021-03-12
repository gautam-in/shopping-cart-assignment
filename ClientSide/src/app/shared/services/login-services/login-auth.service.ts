import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class LoginAuthService implements CanActivate {
  constructor(private router: Router, private loginService: LoginService) {}

  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    return this.checkAuth();
  }

  checkAuth(): boolean | Observable<boolean> | Promise<boolean> {
    if (this.loginService.isLoggedIn()) {
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
}
