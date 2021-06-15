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
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { AppEffectModule } from 'src/app/store/effects/app.effects.module';
import { appReducer } from 'src/app/store/reducers/app.reducer';
import { ErrorMsg } from '../../common/constants/error.constants';
import { AuthState } from '../../models/auth-state.model';
import { AuthService } from '../../services/auth.service';
import { AuthActions } from '../actions/action-types';
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
      const action = AuthActions.signupStart(user);
      const expirationDate = new Date(new Date().getTime() + 7200 * 1000);
      const outcome = AuthActions.authenticateSuccess({
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
        expect(action.email).toEqual(outcome.email);
      });
    });

    it('should return an AuthenticateFail action, with an error, on failure', () => {
      const user = generateUser();
      const action = AuthActions.signupStart(user);
      const outcome = AuthActions.authenticateFail({
        reason: ErrorMsg.UNKNOWN_ERROR,
      });
      actions$ = of(action);
      service.signup.and.returnValue(throwError(ErrorMsg.UNKNOWN_ERROR));
      effects.authSignup.subscribe((action) => {
        expect(action).toEqual(outcome);
      });
    });

    it('should return an AuthenticateFail action, with an error, on failure', () => {
      let array: { id: string; msg: string }[] = [
        {
          msg: ErrorMsg.EMAIL_EXISTS,
          id: 'EMAIL_EXISTS',
        },
        {
          msg: ErrorMsg.EMAIL_NOT_FOUND,
          id: 'EMAIL_NOT_FOUND',
        },
        {
          msg: ErrorMsg.INVALID_PASSWORD,
          id: 'INVALID_PASSWORD',
        },
      ];
      const user = generateUser();
      const action = AuthActions.signupStart(user);
      for (let { id, msg } of array) {
        const outcome = AuthActions.authenticateFail({
          reason: msg,
        });
        actions$ = of(action);
        service.signup.and.returnValue(
          throwError({
            error: {
              error: {
                message: id,
              },
            },
          })
        );
        effects.authSignup.subscribe((action) => {
          expect(action).toEqual(outcome);
        });
      }
    });
  });

  describe('authLogin', () => {
    it('should return an AuthenticateSuccess action, with the user, on success', () => {
      const user = generateUser();
      const action = AuthActions.LoginStart({
        email: 'dheerendra@gmail.com',
        password: 'Dipu@1234',
      });
      const expirationDate = new Date(new Date().getTime() + 7200 * 1000);
      const outcome = AuthActions.authenticateSuccess({
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
        expect(action.email).toEqual(outcome.email);
      });
    });

    it('should return an AuthenticateFail action, with an error, on failure', () => {
      const user = generateUser();
      const action = AuthActions.LoginStart(user);
      const outcome = AuthActions.authenticateFail({
        reason: ErrorMsg.UNKNOWN_ERROR,
      });
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

      const action = AuthActions.authenticateSuccess({
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
      const action = AuthActions.autoLogin();
      const outcome = AuthActions.authenticateSuccess({
        email: 'dheerendra@gmail.com',
        userId: '123',
        expirationDate: expirationDate,
        redirect: false,
        token: 'abcdefghi',
      });

      actions$ = of(action);
      effects.autoLogin.subscribe((action: any) => {
        expect(action.email).toEqual(outcome.email);
      });
    });

    it('should return an AuthenticateSuccess action, with the user, on fail ', () => {
      localStorage.removeItem('userData');
      const action = AuthActions.autoLogin();
      const outcome = {
        type: 'DUMMY',
      };
      actions$ = of(action);
      effects.autoLogin.subscribe((action: any) => {
        expect('DUMMY').toEqual(outcome.type);
      });
    });

    it('should return an AuthenticateSuccess action, with the user, on fail ', () => {
      localStorage.setItem(
        'userData',
        JSON.stringify({ email: 'abc@gmail.com' })
      );
      const action = AuthActions.autoLogin();
      const outcome = {
        type: 'DUMMY',
      };
      actions$ = of(action);
      effects.autoLogin.subscribe((action: any) => {
        expect('DUMMY').toEqual(outcome.type);
      });
    });
  });

  describe('autoLogout', () => {
    it('should navigate to the Auth page', () => {
      const action = AuthActions.logout();
      actions$ = of(action);
      effects.authLogout.subscribe();
      expect(router.navigate).toHaveBeenCalledWith(['/auth']);
    });
  });

  describe('authFailAction', () => {
    it('should fail ', () => {
      const action = AuthActions.authenticateFail({
        reason: ErrorMsg.UNKNOWN_ERROR,
      });
      actions$ = of(action);
      effects.authFailAction$.subscribe((action) => {
        expect(action.reason).toEqual(action.reason);
      });
    });
  });
});

function generateUser() {
  return { email: 'dheerendra@gmail.com', password: 'Dipu@1234' };
}
