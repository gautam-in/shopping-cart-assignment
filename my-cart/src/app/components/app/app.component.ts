import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from '../../Store/actions/auth.state';
import * as authActions from '../../Store/actions/auth.actions';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-cart';
  constructor(private store: Store<AuthState>, @Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) this.autoLogin();
  }

  autoLogin() {
    let userDetails = localStorage.getItem('user');
    if (userDetails) {
      let userAuthDetails: AuthState = JSON.parse(userDetails);
      if (new Date(userAuthDetails.expiresIn).getTime() - new Date().getTime() > 0) {
        this.store.dispatch(new authActions.SignIn(userAuthDetails))
      } else {
        localStorage.removeItem('user');
      }
    }
  }
}
