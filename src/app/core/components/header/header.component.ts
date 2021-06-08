import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/store/app.reducer';
import * as AuthActions from 'src/app/auth/store/actions/auth.actions';
import { User } from 'src/app/auth/models/user.model';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  cartItem = 0;
  showCart = false;
  private storeSub!: Subscription;
  isAuthenticated = false;
  user: User | null = null;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.storeSub = this.store
      .select('auth')
      .pipe(map((authState) => authState.user))
      .subscribe((user) => {
        this.user = user;
        this.isAuthenticated = !!user;
      });
    this.storeSub.add(
      this.store.select('cartList').subscribe((cartList) => {
        this.cartItem = cartList.cart.length;
      })
    );
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

  ngOnDestroy() {
    this.storeSub.unsubscribe();
  }
}
