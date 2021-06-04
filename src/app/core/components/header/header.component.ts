import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/store/app.reducer';
import * as AuthActions from 'src/app/auth/store/actions/auth.actions';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  cartItem = 0;
  showCart = false;
  isAuthenticated = false;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select('auth')
      .pipe(map((authState) => authState.user))
      .subscribe((user) => {
        debugger;
        this.isAuthenticated = !!user;
      });
    this.store.select('cartList').subscribe((cartList) => {
      this.cartItem = cartList.cart.length;
    });
  }

  closeCart() {
    this.showCart = false;
  }

  openCart() {
    this.showCart = true;
  }

  logout() {
    this.store.dispatch(AuthActions.Logout());
  }
}
