import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AppState } from 'src/app/store/app.reducer';
import { appReducer } from 'src/app/store/app.reducer';
import { LoginComponent } from './login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let store: MockStore<AppState>;
  let toasterService: ToastrService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        ToastrModule.forRoot(),
        FormsModule,
        BrowserAnimationsModule,
        StoreModule.forRoot(appReducer),
      ],
      providers: [provideMockStore()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
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

  it('submit login form with valid inputs', () => {
    const storeSpy = spyOn(store, 'dispatch');
    component.onSubmit({
      value: { email: 'test@test.com', password: 'test1234' },
      reset: () => {},
    } as NgForm);
    expect(storeSpy).toHaveBeenCalled();
  });
});
