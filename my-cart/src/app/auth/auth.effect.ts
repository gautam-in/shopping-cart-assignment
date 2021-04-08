import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Effect ,Actions, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, filter, map, switchMap, tap } from "rxjs/operators";
import { BackendInteractionService } from "../backend-interaction.service";
import * as authActions from './auth.actions'

@Injectable()
export class AuthEffect{
@Effect()
signUpUser = this.actions.pipe(
   ofType(authActions.SIGN_UP_START),
   switchMap((userDetails:authActions.SignUpStart)=>{
      return this.dataService.signUp(userDetails['payload'])
   }),
   map((authResponse)=>{
      return new authActions.SignUp(authResponse)
   }),
   catchError(()=> of(12,3))
)

@Effect()
signInUser = this.actions.pipe(
   ofType(authActions.SIGN_IN_START),
   switchMap((userDetails:authActions.SignInStart)=>{
      return this.dataService.signIn(userDetails.payload)
   }),
   map((authResponse)=>{
      return new authActions.SignIn(authResponse)
   }),
   catchError(()=> of(12,3))
)

 @Effect({dispatch:false})
 redirectToHome = this.actions.pipe(
   ofType(authActions.SIGN_IN,authActions.SIGN_UP),
   tap(authDetails=>{
    this.route.navigate(['home'])
   })
)

@Effect({dispatch:false})
 refresh = this.actions.pipe(
   ofType(authActions.SIGN_IN,authActions.SIGN_UP),
   tap((authDetails:authActions.SignIn)=>{
    if(!localStorage.getItem('user')){
      let expiryTime = this.getExpiryDate(Number(authDetails.payload.expiresIn))
      let userDetails = {...authDetails.payload,expiresIn : expiryTime} 
      localStorage.setItem('user',JSON.stringify(userDetails))
    }
   })
)

@Effect({dispatch:false})
 clearAuthDetails = this.actions.pipe(
   ofType(authActions.LOG_OUT),
   tap((authDetails:authActions.SignIn)=>{
     localStorage.removeItem('user');
   })
)

@Effect({dispatch:false})
redirectToLogin = this.actions.pipe(
   ofType(authActions.LOG_OUT),
   tap((authDetails:authActions.SignIn)=>{
      this.route.navigate(['login'])
   })
)


getExpiryDate(milliSeconds:number){
    return new Date(new Date().getTime() + milliSeconds*1000);
}
constructor(private actions:Actions,private dataService:BackendInteractionService,private route:Router){
         
}
    
}
