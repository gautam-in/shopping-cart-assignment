import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../app-routing.module';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let location: Location;
  let router: Router;

  beforeEach(async () => {  
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule.withRoutes(routes)],
      declarations: [ LoginComponent ],
      providers: []
    })
    .compileComponents();
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation()
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.isLoginPage).toBeFalsy();
  });

  it('Check Password and Confirm Password match', () => {
    const passwordInput = fixture.debugElement.query(By.css('#passwordInput')).nativeElement
    const confirmPasswordInput = fixture.debugElement.query(By.css('#confirmPasswordInput')).nativeElement
    passwordInput.value = 'someValue';
    passwordInput.dispatchEvent(new Event('input'));
    confirmPasswordInput.value = 'someOtherValue';
    confirmPasswordInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.signInSignupForm.value.password).toEqual('someValue');
  });

  it('Check Form Submittion', () => {
    const submitBtn = fixture.debugElement.query(By.css('.submit-btn')).nativeElement
    let submitFnSpy = spyOn(component, 'formSubmit');
    submitFnSpy.and.callThrough();
    component.signInSignupForm.patchValue({
      confirmPassword: "1234Abc",
      email: "bharatprj28@gmail.com",
      firstName: "Bharat",
      lastName: "Kumar",
      password: "1234Abc",
    });
    fixture.detectChanges();
    expect(submitBtn.disabled).toBeFalsy();
    submitBtn.click();
    fixture.detectChanges();
    expect(submitFnSpy).toHaveBeenCalled();
  })

  // it('navigate to login', fakeAsync(() => {
  //   router.navigate(['login']);
  //   tick();//   // expect(location.path()).toBe('/search');
  //   expect(component.isLoginPage).toBeTrue();
  // }));
});
