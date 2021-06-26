import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { User } from 'src/app/core/models/user.model';
import { UtilService } from 'src/app/core/services/util.service';
import { ErrorMsg } from '../../common/constants/error.constants';
import { AuthService } from '../../services/auth.service';
import { AuthActions } from '../actions/action-types';

export const handleAuthentication = (
  expiresIn: number,
  email: string,
  userId: string,
  token: string
) => {
  const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
  const user = new User(email, userId, token, new Date(expirationDate));
  localStorage.setItem('userData', JSON.stringify(user));
  return AuthActions.authenticateSuccess({
    email: email,
    userId: userId,
    token: token,
    expirationDate: expirationDate,
    redirect: true,
  });
};

export const handleError = (errorRes: any) => {
  console.log(errorRes);
  let errorMessage = ErrorMsg.UNKNOWN_ERROR;
  if (!errorRes.error || !errorRes.error.error) {
    return of(AuthActions.authenticateFail({ reason: errorMessage }));
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
  return of(AuthActions.authenticateFail({ reason: errorMessage }));
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
      ofType(AuthActions.signupStart),
      switchMap((signupAction) => {
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
      ofType(AuthActions.LoginStart),
      switchMap((authData) => {
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
        ofType(AuthActions.authenticateSuccess),
        tap((authSuccessAction) => {
          if (authSuccessAction.redirect) {
            this.router.navigate(['/']);
          }
        })
      ),
    { dispatch: false }
  );

  autoLogin = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.autoLogin),
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
          return AuthActions.authenticateSuccess({
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
        ofType(AuthActions.logout),
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
        ofType(AuthActions.authenticateFail),
        tap((e) => {
          this.util.openSnackBar(e.reason);
        })
      ),
    { dispatch: false }
  );
}
