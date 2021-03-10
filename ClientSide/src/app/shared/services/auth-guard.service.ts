import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanLoad, CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    return this.checkAuth();
  }

  canLoad(): boolean | Observable<boolean> | Promise<boolean> {
    return this.checkAuth();
  }

  checkAuth(): boolean | Observable<boolean> | Promise<boolean> {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
