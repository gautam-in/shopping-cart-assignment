import {
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { exhaustMap, map, take } from 'rxjs/operators';
import { AppState } from 'src/app/models/app-state.model';
import { selectAuthState } from '../store/selectors/auth.selectors';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private store: Store<AppState>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.store.pipe(
      select(selectAuthState),
      take(1),
      map((authState) => {
        return authState.user;
      }),
      exhaustMap((user) => {
        if (!user) {
          return next.handle(req);
        }
        const modifiedReq = req.clone({
          params: new HttpParams().set('auth', user.token + ''),
        });
        return next.handle(modifiedReq);
      })
    );
  }
}
