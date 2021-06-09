import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import * as AuthActions from 'src/app/core/store/actions/auth.actions';
import { AppState } from 'src/app/models/app-state.model';
import { environment } from 'src/environments/environment';
import { AuthResponseData } from '../models/auth-response-data.model';


@Injectable({ providedIn: 'root' })
export class AuthService {
  tokenExpirationTimer: any;

  constructor(private store: Store<AppState>, private http: HttpClient) {}

  setLogoutTimer(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.store.dispatch(new AuthActions.Logout());
    }, expirationDuration);
  }

  clearLogoutTimer() {
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
      this.tokenExpirationTimer = null;
    }
  }

  login(authData: AuthActions.LoginStart) {
    return this.http
      .post<AuthResponseData>(
        `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${environment.firebaseConfig.apiKey}`,
        {
          email: authData.payload.email,
          password: authData.payload.password,
          returnSecureToken: true,
        }
      )
      .pipe(
        tap((resData) => {
          this.setLogoutTimer(+resData.expiresIn * 1000);
        })
      );
  }

  signup(signupAction: AuthActions.SignupStart) {
    return this.http
      .post<AuthResponseData>(
        `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${environment.firebaseConfig.apiKey}`,
        {
          email: signupAction.payload.email,
          password: signupAction.payload.password,
          returnSecureToken: true,
        }
      )
      .pipe(
        tap((resData) => {
          this.setLogoutTimer(+resData.expiresIn * 1000);
        })
      );
  }
}
