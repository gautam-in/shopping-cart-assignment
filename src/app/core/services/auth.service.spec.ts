import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import * as AuthActions from 'src/app/core/store/actions/auth.actions';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { AppEffectModule } from 'src/app/store/effects/app.effects.module';
import { appReducer } from 'src/app/store/reducers/app.reducer';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let store: MockStore;
  const initialState = {};
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
      providers: [AuthService, provideMockStore({ initialState })],
    });
    store = TestBed.inject(MockStore);
    service = TestBed.inject(AuthService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  it('setLogoutTimer should be called', () => {
    service.setLogoutTimer(100);
    expect(service.tokenExpirationTimer).toBeTruthy();
  });

  it('clearLogoutTimer should be called', () => {
    service.clearLogoutTimer();
    expect(service.tokenExpirationTimer).toBeFalsy();
  });

  it('clearLogoutTimer should be called', () => {
    service.setLogoutTimer(100);
    service.clearLogoutTimer();
    expect(service.tokenExpirationTimer).toBeFalsy();
  });

  describe('login', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.inject(HttpTestingController);
      const request = { email: 'abc@gmail.com', password: 'Dipu@7388' };
      const authresponse = {
        email: 'abc@gmail.com',
        expiresIn: '7200',
        idToken: 'abcdefghi',
        localId: '123',
      };
      service.login(AuthActions.LoginStart(request)).subscribe((res) => {
        expect(res.email).toEqual(authresponse.email);
      });
      const req = httpTestingController.expectOne(
        `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${environment.firebaseConfig.apiKey}`
      );
      expect(req.request.method).toEqual('POST');
      req.flush(authresponse);
      httpTestingController.verify();
    });
  });

  describe('signup', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.inject(HttpTestingController);
      const request = { email: 'abc@gmail.com', password: 'Dipu@7388' };
      const authresponse = {
        email: 'abc@gmail.com',
        expiresIn: '7200',
        idToken: 'abcdefghi',
        localId: '123',
      };
      service.signup(AuthActions.signupStart(request)).subscribe((res) => {
        expect(res.email).toEqual(authresponse.email);
      });
      const req = httpTestingController.expectOne(
        `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${environment.firebaseConfig.apiKey}`
      );
      expect(req.request.method).toEqual('POST');
      req.flush(authresponse);
      httpTestingController.verify();
    });
  });
});
