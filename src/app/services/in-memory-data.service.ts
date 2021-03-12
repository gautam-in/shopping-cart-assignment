import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject, throwError } from 'rxjs';
import { catchError, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  public cartSubject = new Subject<any>();
  public cartlistData: any;
  public updateCartCount = new Subject<any>();
  public userLoggedIn: boolean;
  public productId: string;
  constructor(private httpClient: HttpClient) {
    this.productId = '';
   }
   getCategoryData(): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*' });
    const options = { headers };
    return this.httpClient.get('/categories', options).pipe(share(), catchError(this.handleError));
  }

   login(email: string, rawPassword: string): Observable<any>{
     const password = btoa(rawPassword);
     const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*' });
     const options = { headers };
     return this.httpClient.post('/login', {email, password}, options).pipe(share(), catchError(this.handleError));
   }
   banner(): Observable<any>{
      return this.httpClient.get('/banners').pipe(share(), catchError(this.handleError));
   }
   productList(): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*' });
    const options = { headers };
    return this.httpClient.get('/products', options).pipe(share(), catchError(this.handleError));
   }
   addToCart(id: string): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*' });
    const options = { headers };
    return this.httpClient.post('/addToCart', {id}, options).pipe(share(), catchError(this.handleError));
   }
   handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
        errorMessage = `Error: ${error.error.message}`;
      }else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
    return throwError(error);
   }
  }
