import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { User } from 'src/app/core/models/user.model';
import { UtilService } from 'src/app/core/services/util.service';
import * as AuthActions from 'src/app/core/store/actions/auth.actions';
import { ErrorMsg } from '../../common/constants/error.constants';
import { AuthService } from '../../services/auth.service';

export const handleAuthentication = (
  expiresIn: number,
  email: string,
  userId: string,
  token: string
) => {
  const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
  const user = new User(email, userId, token, expirationDate);
  localStorage.setItem('userData', JSON.stringify(user));
  return new AuthActions.AuthenticateSuccess({
    email: email,
    userId: userId,
    token: token,
    expirationDate: expirationDate,
    redirect: true,
  });
};

export const handleError = (errorRes: any) => {
  let errorMessage = ErrorMsg.UNKNOWN_ERROR;
  if (!errorRes.error || !errorRes.error.error) {
    return of(new AuthActions.AuthenticateFail(errorMessage));
  }
  switch (errorRes.error.error.message) {
    case 'EMAIL_EXISTS':
      errorMessage = ErrorMsg.EMAIL_EXISTS;
      break;
    case 'EMAIL_NOT_FOUND':
      errorMessage = ErrorMsg.EMAIL_NOT_FOUND;
      break;
    case 'INVALID_PASSWORD':
      errorMessage = ErrorMsg.INVALID_PASSWORD;
      break;
  }
  return of(new AuthActions.AuthenticateFail(errorMessage));
};

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
    private util: UtilService
  ) {}

  authSignup = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.SIGNUP_START),
      switchMap((signupAction: AuthActions.SignupStart) => {
        return this.authService.signup(signupAction);
      }),
      map((resData) => {
        return handleAuthentication(
          +resData.expiresIn,
          resData.email,
          resData.localId,
          resData.idToken
        );
      }),
      catchError((errorRes) => {
        return handleError(errorRes);
      })
    )
  );

  authLogin = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.LOGIN_START),
      switchMap((authData: AuthActions.LoginStart) => {
        return this.authService.login(authData);
      }),
      map((resData) => {
        return handleAuthentication(
          +resData.expiresIn,
          resData.email,
          resData.localId,
          resData.idToken
        );
      }),
      catchError((errorRes) => {
        return handleError(errorRes);
      })
    )
  );

  authRedirect = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.AUTHENTICATE_SUCCESS),
        tap((authSuccessAction: AuthActions.AuthenticateSuccess) => {
          if (authSuccessAction.payload.redirect) {
            this.router.navigate(['/']);
          }
        })
      ),
    { dispatch: false }
  );

  autoLogin = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.AUTO_LOGIN),
      map(() => {
        const userData: {
          email: string;
          id: string;
          _token: string;
          _tokenExpirationDate: string;
        } = JSON.parse(localStorage.getItem('userData') || '0');
        if (!userData) {
          return { type: 'DUMMY' };
        }

        const loadedUser = new User(
          userData.email,
          userData.id,
          userData._token,
          new Date(userData._tokenExpirationDate)
        );

        if (loadedUser.token) {
          const expirationDuration =
            new Date(userData._tokenExpirationDate).getTime() -
            new Date().getTime();
          this.authService.setLogoutTimer(expirationDuration);
          return new AuthActions.AuthenticateSuccess({
            email: loadedUser.email,
            userId: loadedUser.id,
            token: loadedUser.token,
            expirationDate: new Date(userData._tokenExpirationDate),
            redirect: false,
          });
        }
        return { type: 'DUMMY' };
      })
    )
  );

  authLogout = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.LOGOUT),
        tap(() => {
          this.authService.clearLogoutTimer();
          this.util.openSnackBar(ErrorMsg.LOG_OUT);
          localStorage.removeItem('userData');
          this.router.navigate(['/auth']);
        })
      ),
    { dispatch: false }
  );

  authFailAction$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.AUTHENTICATE_FAIL),
        tap((e: AuthActions.AuthenticateFail) => {
          this.util.openSnackBar(e.payload);
        })
      ),
    { dispatch: false }
  );
}
