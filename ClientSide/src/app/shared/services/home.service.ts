import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { throwError, Observable, of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Banners } from 'src/app/models/banners';
import { Categories } from 'src/app/models/Categories';
import { Products } from 'src/app/models/Products';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  apiURL = environment.serverURL;
  showCartSub = new Subject<boolean>();
  showCart = this.showCartSub.asObservable();


  show() {
    this.showCartSub.next(true);
  }

  hide() {
    this.showCartSub.next(false);
  }

  constructor(private http: HttpClient) {}

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getBanners(): Observable<Banners[]> {
    return this.http
      .get<Banners[]>(`${this.apiURL}/banners`)
      .pipe(catchError(this.handleError));
  }

  getCategories(): Observable<Categories[]> {
    return this.http
      .get<Categories[]>(`${this.apiURL}/categories`)
      .pipe(catchError(this.handleError));
  }

  getProducts(): Observable<Products[]> {
    return this.http
      .get<Products[]>(`${this.apiURL}/products`)
      .pipe(catchError(this.handleError));
  }

  public processData(data: { order: number }[]): any[] {
    return data
      .filter((data) => data.order > 0)
      .sort((a, b) => a.order - b.order);
  }

  private handleError(err) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
