import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appState';
import * as productActions from './../../products/productions-actions';
import * as authActions from './../../auth/auth.actions'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLogin: boolean = false;
  error: string = '';
  constructor(private store: Store<AppState>, private router: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.getQueryParams();
    this.getAuthDetails();
  }

  login(form: NgForm) {
    let { email, password } = form.value;
    if (this.isLogin) {
      this.store.dispatch(new authActions.SignInStart({ email, password, returnSecureToken: true }));
    } else {
      this.store.dispatch(new authActions.SignUpStart({ email, password, returnSecureToken: true }));
    }
    this.store.dispatch(new productActions.FetchCategories());
  }

  getQueryParams() {
    this.router.queryParamMap.subscribe(params => {
      this.isLogin = params.get('action') === 'login' ? true : false
    })
  }

  getAuthDetails() {
    this.store.select('auth').subscribe(authDetails => {
      this.error = authDetails.error;
    })
  }

}
