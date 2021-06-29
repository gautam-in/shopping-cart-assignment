import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { AppState } from 'src/app/models/app-state.model';
import { environment } from 'src/environments/environment';
import { AuthResponseData } from '../models/auth-response-data.model';
import { LoginPayLoad } from '../models/store-payload.model';
import { AuthActions } from '../store/actions/action-types';

@Injectable({ providedIn: 'root' })
export class AuthService {
  tokenExpirationTimer: any;

  constructor(private store: Store<AppState>, private http: HttpClient) {}

  setLogoutTimer(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.store.dispatch(AuthActions.logout());
    }, expirationDuration);
  }

  clearLogoutTimer() {
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
      this.tokenExpirationTimer = null;
    }
  }

  login(authData: LoginPayLoad) {
    return this.http
      .post<AuthResponseData>(
        `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${environment.firebaseConfig.apiKey}`,
        {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true,
        }
      )
      .pipe(
        tap((resData) => {
          this.setLogoutTimer(+resData.expiresIn * 1000);
        })
      );
  }

  signup(signupAction: LoginPayLoad) {
    return this.http
      .post<AuthResponseData>(
        `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${environment.firebaseConfig.apiKey}`,
        {
          email: signupAction.email,
          password: signupAction.password,
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
