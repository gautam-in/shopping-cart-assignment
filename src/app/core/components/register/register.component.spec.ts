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
import { formValidationMsgs, RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
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
        SharedModule,
      ],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [RegisterComponent],
      providers: [
        { provide: FormBuilder, useClass: FormBuilder },
        provideMockStore({ initialState }),
        { provide: SeoService, useClass: SeoService },
      ],
    });
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`validationMessages has default value`, () =>
    expect(component.validationMessages).toEqual(formValidationMsgs));

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const seoServiceStub: SeoService =
        fixture.debugElement.injector.get(SeoService);
      spyOn(seoServiceStub, 'setMetaData').and.callThrough();
      component.ngOnInit();
      expect(seoServiceStub.setMetaData).toHaveBeenCalled();
    });
  });

  describe('ngAfterViewInit', () => {
    it('should detect form changes', () => {
      component.ngAfterViewInit();
      fixture.detectChanges();
      expect(component.displayMessage.firstName).toBeUndefined();
    });
  });

  describe('submitRegistrationForm', () => {
    it('makes expected calls', () => {
      const storeStub: MockStore = fixture.debugElement.injector.get(MockStore);
      spyOn(storeStub, 'dispatch').and.callThrough();
      expect(component.registrationForm).toBeDefined();
      component.registrationForm.patchValue({
        firstName: 'Komal',
        lastName: 'Gupta',
        email: 'komal@publicissapient.com',
        password: 'Abc@12345',
        confirmPassword: 'Abc@12345',
      });
      component.submitRegistrationForm();
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

  describe('ngOnDestroy', () => {
    it('component reference should be destroyed', () => {
      component.ngOnDestroy();
      expect(component).toBeDefined();
    });
  });
});
