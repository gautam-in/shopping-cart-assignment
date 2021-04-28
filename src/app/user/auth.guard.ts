import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private _userService: UserService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.checkLoggedIn(state.url)) {
      return true;
    } else {
      this.router.navigate(['/auth/login']);
      return false;
    }
  }

  checkLoggedIn(url: string): any {
    if (this._userService.getSignedInUser()) {
      return true;
    }
    return false;
  }
}
