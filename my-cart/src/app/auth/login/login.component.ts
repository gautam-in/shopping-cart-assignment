import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appState';
import * as productActions  from './../../products/productions-actions';
import * as authActions  from './../../auth/auth.actions'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLogin : boolean = false;
  constructor(private store:Store<AppState>,private router :ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.store.dispatch(new productActions.FetchCategories());
    this.getQueryParams();
  }

  login(form:NgForm){
    let {email,password} = form.value;
    if(this.isLogin){
      this.store.dispatch(new authActions.SignInStart({email,password,returnSecureToken:true}));
    }else{
      this.store.dispatch(new authActions.SignUpStart({email,password,returnSecureToken:true}));
    }
    
  }

  getQueryParams(){
      this.router.queryParams.subscribe(params=>{
         this.isLogin = params['action'] === 'login' ? true : false
      })
  }

}
