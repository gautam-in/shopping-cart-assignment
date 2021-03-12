import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { throwError, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Banners } from 'src/app/models/banners';
import { Categories } from 'src/app/models/Categories';
import { Products } from 'src/app/models/Products';
import { environment } from 'src/environments/environment';
import { CartService } from './cart-services/cart.service';


@Injectable({
  providedIn: 'root',
})
export class SharedService {
  apiURL = environment.serverURL;

  constructor(private http: HttpClient, private cartService: CartService) {}

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
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
    return this.http.get<Products[]>(`${this.apiURL}/products`).pipe(
      tap((res) => (this.cartService.productsData = res)),
      catchError(this.handleError)
    );
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
      errorMessage = `Backend returned code ${err.status}: ${err.body?.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }


}
