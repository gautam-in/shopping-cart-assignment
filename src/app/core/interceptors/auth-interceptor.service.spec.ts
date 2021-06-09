import {
  HttpHandler,
  HttpRequest,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { AppEffectModule } from 'src/app/store/effects/app.effects.module';
import { appReducer } from 'src/app/store/reducers/app.reducer';
import { AuthInterceptorService } from './auth-interceptor.service';

describe('AuthInterceptorService', () => {
  let service: AuthInterceptorService;
  let store: MockStore;
  const initialState = {};
  let httpClientSpy: { get: jasmine.Spy };
  let httpMock: HttpTestingController;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

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
        AuthInterceptorService,
        HttpHandler,
        provideMockStore({ initialState }),
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptorService,
          multi: true,
        },
      ],
    });
    service = TestBed.inject(AuthInterceptorService);
    store = TestBed.inject(MockStore);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('intercept', () => {
    it('makes expected calls', () => {
      const httpRequestStub: HttpRequest<'get'> = new HttpRequest(
        'GET',
        'http://localhost:4201'
      );
      const httpHandlerStub: HttpHandler = TestBed.inject(HttpHandler);
      const storeStub: MockStore = TestBed.inject(MockStore);
      spyOn(httpRequestStub, 'clone').and.callThrough();
      spyOn(storeStub, 'select').and.callThrough();
      service.intercept(httpRequestStub, httpHandlerStub);
      expect(httpRequestStub.clone).not.toHaveBeenCalled();
      expect(httpHandlerStub.handle).toBe(undefined);
      expect(storeStub.select).toHaveBeenCalled();
    });
  });
});
