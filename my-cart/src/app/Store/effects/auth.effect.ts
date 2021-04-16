import { HttpErrorResponse } from "@angular/common/http";
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { Router } from "@angular/router";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { BackendInteractionService } from "../../services/backend-interaction.service";
import * as authActions from '../actions/auth.actions'



@Injectable()
export class AuthEffect {

   signUpUser = createEffect(() => {
      return this.actions.pipe(
         ofType(authActions.SIGN_UP_START),
         switchMap((userDetails: authActions.SignUpStart) => {
            return this.dataService.signUp(userDetails['payload']);
         }),
         map((authResponse) => {
            return new authActions.SignUp(authResponse);
         }),
         catchError((errorDetails) => of(new authActions.AuthError(errorDetails.error.error.message))));
   })

   signInUser = createEffect(() => {
      return this.actions.pipe(
         ofType(authActions.SIGN_IN_START),
         switchMap((userDetails: authActions.SignInStart) => {
            return this.dataService.signIn(userDetails.payload);
         }),
         map((authResponse) => {
            return new authActions.SignIn(authResponse);
         }),
         catchError((errorDetails) => of(new authActions.AuthError(errorDetails.error.error.message))));
   })

   redirectToHome = createEffect(() => {
      return this.actions.pipe(
         ofType(authActions.SIGN_IN, authActions.SIGN_UP),
         tap(authDetails => {
            this.route.navigate(['home']);
         }));
   }, { dispatch: false })


   refresh = createEffect(() => {
      return this.actions.pipe(
         ofType(authActions.SIGN_IN, authActions.SIGN_UP),
         tap((authDetails: authActions.SignIn) => {
            if (!localStorage.getItem('user') && isPlatformBrowser(this.platformId)) {
               let expiryTime = this.getExpiryDate(Number(authDetails.payload.expiresIn));
               let userDetails = { ...authDetails.payload, expiresIn: expiryTime };
               localStorage.setItem('user', JSON.stringify(userDetails));
            }
         }));
   }, { dispatch: false })

   clearAuthDetails = createEffect(() => {
      return this.actions.pipe(
         ofType(authActions.LOG_OUT),
         tap((authDetails: authActions.SignIn) => {
            if (isPlatformBrowser(this.platformId)) {
               localStorage.removeItem('user');
            }
         }));
   }, { dispatch: false })

   redirectToLogin = createEffect(() => {
      return this.actions.pipe(
         ofType(authActions.LOG_OUT),
         tap((authDetails: authActions.SignIn) => {
            this.route.navigate(['login'], { queryParams: { action: 'login' } })
         }))
   }, { dispatch: false })


   getExpiryDate(milliSeconds: number) {
      return new Date(new Date().getTime() + milliSeconds * 1000);
   }

   handleError(error: HttpErrorResponse) {
      console.log(error)
   }
   constructor(private actions: Actions, private dataService: BackendInteractionService, private route: Router, @Inject(PLATFORM_ID) private platformId: any) {

   }


}
