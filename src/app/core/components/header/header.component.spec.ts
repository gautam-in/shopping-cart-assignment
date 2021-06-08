import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { mockUser } from 'src/app/auth/mock/user.mock';
import { AppState } from 'src/app/store/app.reducer';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let store: MockStore<AppState>;
  const initialState: AppState = {
    auth: {
      user: mockUser,
      authError: '',
      loading: false,
    },
    cartList: {
      cart: [],
    },
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HeaderComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('cart button click should show cart', () => {
    component.openCart();
    expect(component.showCart).toBeTruthy();
  });

  it('cart close button click should hide cart', () => {
    component.closeCart();
    expect(component.showCart).toBeFalsy();
  });

  it('logout button should dispatch logout action on store', () => {
    const spy = spyOn(store, 'dispatch');
    component.logout();
    expect(spy).toHaveBeenCalled();
  });
});
