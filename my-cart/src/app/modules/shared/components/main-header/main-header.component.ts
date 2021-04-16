import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/Store/actions/app.state';
import { AuthState } from 'src/app/Store/actions/auth.state';
import { CartState } from './../../../../Store/actions/product.state'
import * as authActions from '../../../../Store/actions/auth.actions';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  islogin: boolean = false;
  user: AuthState = {} as AuthState;
  isOpenShoppingCart: boolean = false;
  totalItemsInCart: number = 0;
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.getUserAuth();
    this.getCartItems()
  }

  getUserAuth() {
    this.store.select('auth').subscribe(userAuth => {
      this.user = userAuth
    })
  }

  getCartItems() {
    this.store.select('cart').subscribe(productList => {
      console.log(productList);
      this.getTotalItemsAdded(productList);
    })
  }

  logout() {
    this.store.dispatch(new authActions.Logout())
  }

  getTotalItemsAdded(itemsInCart: CartState) {
    if (itemsInCart && itemsInCart.addedProducts) {
      this.totalItemsInCart = Object.keys(itemsInCart.addedProducts).reduce((totalItems: any, productId) => {
        return totalItems = totalItems + itemsInCart.addedProducts[productId].quantity
      }, 0)
    }
  }

}
