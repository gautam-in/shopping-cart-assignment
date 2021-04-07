import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appState';
import { AuthState } from 'src/app/auth/AuthState';
import * as authActions from './../../auth/auth.actions';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  islogin : boolean = false;
  user : AuthState = {} as AuthState;
  isOpenShoppingCart : boolean = false;
  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    public dialog: MatDialog,
    private store:Store<AppState>
    ) { }

  ngOnInit(): void {
    this.getUserAuth();
    this.getCartItems()
  }

  getUserAuth(){
    this.store.select('auth').subscribe(userAuth=>{
      this.user = userAuth
   })
  }

  getCartItems(){
     this.store.select('products').subscribe(productList=>{
       console.log(productList);
     })
  }

  logout(){
    this.store.dispatch(new authActions.Logout())
  }

}
