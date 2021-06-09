import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action, StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Observable, of, throwError } from 'rxjs';
import { UtilService } from 'src/app/core/services/util.service';
import * as AuthActions from 'src/app/core/store/actions/auth.actions';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { AppEffectModule } from 'src/app/store/effects/app.effects.module';
import { appReducer } from 'src/app/store/reducers/app.reducer';
import { ErrorMsg } from '../../common/constants/error.constants';
import { AuthState } from '../../models/auth-state.model';
import { AuthService } from '../../services/auth.service';
import { AuthEffects } from './auth.effects';

describe('AuthEffects', () => {
  let effects: AuthEffects;
  let actions$ = new Observable<Action>();
  let store: MockStore;
  let service: any;
  let router = {
    navigate: jasmine.createSpy('navigate'),
  };
  const initialState: AuthState = {
    user: null,
    authError: '',
    loading: false,
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        StoreModule.forRoot(appReducer),
        AppEffectModule,
        HttpClientTestingModule,
        RouterTestingModule,
        MaterialModule,
      ],
      providers: [
        AuthEffects,
        UtilService,
        { provide: Router, useValue: router },
        {
          provide: AuthService,
          useValue: jasmine.createSpyObj(AuthService, [
            'signup',
            'login',
            'setLogoutTimer',
            'clearLogoutTimer',
          ]),
        },
        provideMockStore({ initialState }),
        provideMockActions(() => actions$),
      ],
    });
    store = TestBed.inject(MockStore);
    effects = TestBed.inject(AuthEffects);
    service = TestBed.inject(AuthService);
  });

  it('can load instance', () => {
    expect(effects).toBeTruthy();
  });

  describe('authSignup', () => {
    it('should return an AuthenticateSuccess action, with the user, on success', () => {
      const user = generateUser();
      const action = new AuthActions.SignupStart(user);
      const expirationDate = new Date(new Date().getTime() + 7200 * 1000);
      const outcome = new AuthActions.AuthenticateSuccess({
        email: user.email,
        userId: '123',
        expirationDate: expirationDate,
        redirect: true,
        token: 'abcdefghi',
      });

      actions$ = of(action);
      const respone = {
        email: user.email,
        expiresIn: '7200',
        localId: '123',
        idToken: 'abcdefghi',
      };
      service.signup.and.returnValue(of(respone));
      effects.authSignup.subscribe((action: any) => {
        expect(action.payload.email).toEqual(outcome.payload.email);
      });
    });

    it('should return an AuthenticateFail action, with an error, on failure', () => {
      const user = generateUser();
      const action = new AuthActions.SignupStart(user);
      const outcome = new AuthActions.AuthenticateFail(ErrorMsg.UNKNOWN_ERROR);
      actions$ = of(action);
      service.signup.and.returnValue(throwError(ErrorMsg.UNKNOWN_ERROR));
      effects.authSignup.subscribe((action) => {
        expect(action).toEqual(outcome);
      });
    });
  });

  describe('authLogin', () => {
    it('should return an AuthenticateSuccess action, with the user, on success', () => {
      const user = generateUser();
      const action = new AuthActions.LoginStart({
        email: 'dheerendra@gmail.com',
        password: 'Dipu@1234',
      });
      const expirationDate = new Date(new Date().getTime() + 7200 * 1000);
      const outcome = new AuthActions.AuthenticateSuccess({
        email: 'dheerendra@gmail.com',
        userId: '123',
        expirationDate: expirationDate,
        redirect: true,
        token: 'abcdefghi',
      });

      actions$ = of(action);
      const response = {
        email: user.email,
        expiresIn: 7200,
        localId: '123',
        token: 'abcdefghi',
      };
      service.login.and.returnValue(of(response));
      effects.authLogin.subscribe((action: any) => {
        expect(action.payload.email).toEqual(outcome.payload.email);
      });
    });

    it('should return an AuthenticateFail action, with an error, on failure', () => {
      const user = generateUser();
      const action = new AuthActions.LoginStart(user);
      const outcome = new AuthActions.AuthenticateFail(ErrorMsg.UNKNOWN_ERROR);
      actions$ = of(action);
      service.login.and.returnValue(throwError(ErrorMsg.UNKNOWN_ERROR));
      effects.authLogin.subscribe((action) => {
        expect(action).toEqual(outcome);
      });
    });
  });

  describe('authRedirect', () => {
    it('should navigate to the home page', () => {
      const expirationDate = new Date(new Date().getTime() + 7200 * 1000);

      const action = new AuthActions.AuthenticateSuccess({
        email: 'dheerendra@gmail.com',
        userId: '123',
        expirationDate: expirationDate,
        redirect: true,
        token: 'abcdefghi',
      });
      actions$ = of(action);
      // subscribe to execute the Effect
      effects.authRedirect.subscribe();
      expect(router.navigate).toHaveBeenCalledWith(['/']);
    });
  });

  describe('autoLogin', () => {
    it('should return an AuthenticateSuccess action, with the user, on success ', () => {
      const user = generateUser();
      const expirationDate = new Date(new Date().getTime() + 7200 * 1000);

      localStorage.setItem(
        'userData',
        JSON.stringify({
          ...user,
          id: '123',
          _token: 'abcdefghi',
          _tokenExpirationDate: expirationDate,
        })
      );
      const action = new AuthActions.AutoLogin();
      const outcome = new AuthActions.AuthenticateSuccess({
        email: 'dheerendra@gmail.com',
        userId: '123',
        expirationDate: expirationDate,
        redirect: false,
        token: 'abcdefghi',
      });

      actions$ = of(action);
      effects.autoLogin.subscribe((action: any) => {
        expect(action.payload.email).toEqual(outcome.payload.email);
      });
    });
  });

  describe('autoLogout', () => {
    it('should navigate to the Auth page', () => {
      const action = new AuthActions.Logout();
      actions$ = of(action);
      effects.authLogout.subscribe();
      expect(router.navigate).toHaveBeenCalledWith(['/auth']);
    });
  });

  describe('authFailAction', () => {
    it('should fail ', () => {
      const action = new AuthActions.AuthenticateFail(ErrorMsg.UNKNOWN_ERROR);
      actions$ = of(action);
      effects.authFailAction$.subscribe((action) => {
        expect(action.payload).toEqual(action.payload);
      });
    });
  });
});

function generateUser() {
  return { email: 'dheerendra@gmail.com', password: 'Dipu@1234' };
}
