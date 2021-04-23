import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private serverUrl = 'http://localhost:5000';
  private cart = new BehaviorSubject<any>([]);
  castItems = this.cart.asObservable();
  private products = new BehaviorSubject<any>([]);
  castProducts = this.products.asObservable();

    httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'max-age=31536000',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
    }),
  }

  constructor( private http: HttpClient) { }

  getCartList(items: any): any{
    this.cart.next(items);
    this.addToCart(items);
  }
   getProducts(): any {
     this.cart.next(true);
   }

  public getBanners(): Observable<any> {
    return this.http.get(this.serverUrl + '/banners', this.httpOptions ).pipe(
      catchError(this.handleError)
    );
  }

  public getCategories(): Observable<any> {
    return this.http.get(this.serverUrl + '/categories', this.httpOptions ).pipe(
      catchError(this.handleError)
    );
  }

  public getProductList(): Observable<any> {
    return this.http.get(this.serverUrl + '/products', this.httpOptions ).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  public addToCart(items: any): any {
    this.http.post(this.serverUrl + '/addToCart',items, this.httpOptions ).pipe(
      catchError(this.handleError)
    ).subscribe((data: any) => {
      return data;
    });
  }
  loginImg() {
    const url = "http://localhost:5000/static/images/cart.svg";
    return this.http.get(url, { responseType: 'blob' });
  }
}
