import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { SeoService } from 'src/app/core/services/seo.service';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppEffectModule } from 'src/app/store/effects/app.effects.module';
import { appReducer } from 'src/app/store/reducers/app.reducer';
import { AuthState } from '../../models/auth-state.model';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let store: MockStore;
  const initialState: AuthState = {
    user: null,
    authError: '',
    loading: false,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        BrowserAnimationsModule,
        StoreModule.forRoot(appReducer),
        AppEffectModule,
        HttpClientTestingModule,
        RouterTestingModule,
        MaterialModule,
        SharedModule,
      ],
      declarations: [LoginComponent],
      providers: [
        { provide: FormBuilder, useClass: FormBuilder },
        provideMockStore({ initialState }),
        { provide: SeoService, useClass: SeoService },
      ],
    });
    store = TestBed.inject(MockStore);

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`submitButtonValue has default value`, () => {
    expect(component.submitButtonValue).toEqual(`Login`);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const seoServiceStub: SeoService =
        fixture.debugElement.injector.get(SeoService);
      spyOn(seoServiceStub, 'setMetaData').and.callThrough();
      component.ngOnInit();
      expect(seoServiceStub.setMetaData).toHaveBeenCalled();
      expect(component.loginForm).toBeDefined();
    });
  });
  describe('ngAfterViewInit', () => {
    it('should detect form changes', () => {
      component.ngAfterViewInit();
      fixture.detectChanges();
      expect(component.displayMessage.email).toBeUndefined();
    });
  });
  describe('submitForm', () => {
    it('makes expected calls', () => {
      const storeStub: MockStore = fixture.debugElement.injector.get(MockStore);
      spyOn(storeStub, 'dispatch').and.callThrough();
      component.patchValues({ email: 'abc@gmail.com', password: 'Abc@12345' });
      component.submitForm();
      expect(storeStub.dispatch).toHaveBeenCalled();
    });
  });

  describe('onHandleError', () => {
    it('makes expected calls', () => {
      const storeStub: MockStore = fixture.debugElement.injector.get(MockStore);
      spyOn(storeStub, 'dispatch').and.callThrough();
      component.onHandleError();
      expect(storeStub.dispatch).toHaveBeenCalled();
    });
  });

  describe('onSaveComplete', () => {
    it('should reset form', () => {
      spyOn(component.loginForm, 'reset').and.callThrough();
      component.onSaveComplete();
      expect(component.loginForm.reset).toHaveBeenCalled();
    });
  });

  describe('ngOnDestroy', () => {
    it('component reference should be destroyed', () => {
      component.ngOnDestroy();
      expect(component).toBeDefined();
    });
  });
});
