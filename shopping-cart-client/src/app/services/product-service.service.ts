import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Banners } from '../models/banners';
import { Categories } from '../models/Categories';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  
  apiURL = environment.serverURL;
  constructor(private http: HttpClient,private SharedService:SharedService) { }
  getBanners(): Observable<Banners[]> {
    return this.http
      .get<Banners[]>(`${this.apiURL}/banners`)
      .pipe(catchError(this.SharedService.handleError));
  }

  getCategories(): Observable<Categories[]> {
    return this.http
      .get<Categories[]>(`${this.apiURL}/categories`)
      .pipe(catchError(this.SharedService.handleError));
  }
  // private handleError(err) {
  //   let errorMessage: string;
  //   if (err.error instanceof ErrorEvent) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     errorMessage = `An error occurred: ${err.error.message}`;
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong,
  //     errorMessage = `Backend returned code ${err.status}: ${err.body?.error}`;
  //   }
  //   console.error(err);
  //   return throwError(errorMessage);
  // }
}
