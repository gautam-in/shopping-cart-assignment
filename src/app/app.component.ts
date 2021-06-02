import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
// import firebase from 'firebase';
import { Observable } from 'rxjs';
import { AppState } from './store/app.reducer';
import { State as CartState } from 'src/app/cart/store/cart-list.reducer';
import { CartComponent } from './cart/cart/cart.component';
import { MatDialog } from '@angular/material/dialog';
import { AutoLogin, Logout } from './auth/store/auth.actions';
import { State as AuthState } from './auth/store/auth.reducer';
import { FetchLocalCart } from './cart/store/cart-list.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cart$!: Observable<CartState>;
  user$!: Observable<AuthState>;
  constructor(private store: Store<AppState>, public dialog: MatDialog) {
    // firebase.initializeApp(environment.firebaseConfig);
    this.cart$ = this.store.select('cart');
    this.user$ = this.store.select('auth');
    this.store.dispatch(new AutoLogin());
    this.store.dispatch(new FetchLocalCart());
  }

  openCart() {
    this.dialog.open(CartComponent, {
      minWidth: '50vw',
      minHeight: '60vh',
      maxHeight: 'initial',
      panelClass: 'cart-model',
      height: '60%',
      width: '50%',
    });
  }
  logout() {
    this.store.dispatch(new Logout());
  }
}
