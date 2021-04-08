import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from './auth/AuthState';
import * as authActions from './auth/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-cart';
  constructor(private store:Store<AuthState>){
    this.autoLogin();
  }

  autoLogin(){
    let userDetails = localStorage.getItem('user');
    if(userDetails){
       let userAuthDetails:AuthState = JSON.parse(userDetails);
       if(new Date(userAuthDetails.expiresIn).getTime() - new Date().getTime() > 0){
         this.store.dispatch(new authActions.SignIn(userAuthDetails))
       }else{
        localStorage.removeItem('user');
       }
    }
  }
}
