import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { SharedModule } from 'src/app/shared/shared.module';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AppState } from 'src/app/store/app.reducer';
import { RegisterComponent } from './register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { mockUser } from '../../../mock/constants/user.mock';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let store: MockStore<AppState>;
  let toasterService: ToastrService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [BrowserAnimationsModule, SharedModule, ToastrModule.forRoot()],
      providers: [provideMockStore()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
    toasterService = TestBed.inject(ToastrService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show toaster with authError from store', () => {
    const spy = spyOn(toasterService, 'error');
    const storeSpy = spyOn(store, 'dispatch');
    store.setState({
      auth: { authError: 'error', user: null, loading: false },
      cartList: { cart: [] },
    });
    expect(storeSpy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalled();
  });

  it('submit signup form with valid inputs', () => {
    const resetFormSpy = spyOn(component.registerForm, 'reset');
    const storeSpy = spyOn(store, 'dispatch');
    component.registerForm.setValue(mockUser);
    component.onSubmit();
    expect(storeSpy).toHaveBeenCalled();
    expect(resetFormSpy).toHaveBeenCalled();
  });

  it('submit signup form with invalid inputs', () => {
    const resetFormSpy = spyOn(component.registerForm, 'reset');
    const storeSpy = spyOn(store, 'dispatch');
    component.registerForm.setValue({...mockUser, password: 'asdasdf', confirmPassword: 'asddffgg'});
    component.onSubmit();
    expect(storeSpy).toHaveBeenCalled();
    expect(resetFormSpy).toHaveBeenCalled();
  });
});
