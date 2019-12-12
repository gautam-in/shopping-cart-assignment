import { Injectable, Injector, ErrorHandler } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { TimeoutError } from 'rxjs';
import { BehaviorSubject, Observable } from 'rxjs'


@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) { }

  handleError(error: Error | HttpErrorResponse){
    const router = this.injector.get(Router);
    if (error instanceof HttpErrorResponse) {
      // Server or connection error happened
      console.error("Backend return error",error.status);
      console.error("Response body", error.message);

      if (!navigator.onLine) {
        // Handle offline error
        console.error("Network not available",error.status);
        

      } else {
        console.error("401 or 403")
       
        // Handle Http Error (error.status === 403, 404...)
      }
    } else {
      // Handle Client Error (Angular Error, ReferenceError...) 
      console.error("An error occured", error.message)
   }

    if (error instanceof TimeoutError) {
      console.error("service timeout error")
      
    }
      // Log the error anyway
      console.error('It happens: ', error);
      router.navigate(['error']);
  }
}
