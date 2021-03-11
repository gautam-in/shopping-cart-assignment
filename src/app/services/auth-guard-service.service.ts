import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { InMemoryDataService } from './in-memory-data.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceService implements CanActivate {

  constructor(private inMemoryDataService: InMemoryDataService,
              private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  : boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.inMemoryDataService.userLoggedIn === true){
      return true;
    }else{
        this.router.navigate(['']);
        return false;
    }
  }
}
