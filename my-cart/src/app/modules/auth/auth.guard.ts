import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { map } from "rxjs/operators";
import { AppState } from "../../Store/actions/app.state";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private store: Store<AppState>) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.store.select('auth').pipe(map(authentication => !!authentication.idToken))
    }
}