import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { IBanner } from './../../models/IBanner';
import { ConstantsService } from './constants.service';
import { ICategory } from './../../models/Icategory';
import { IProduct } from './../../models/IProduct';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  error = new Subject<string>();
  constructor(private http: HttpClient, private _constant: ConstantsService) {}


  getBanner(param:string): Observable<IBanner[]>{
    return this.http.get<IBanner[]>(`${this._constant.baseAppUrl+param}`).pipe(
      catchError(errorRes =>{
        return throwError(errorRes);
      })
    );
  }

  getCategories(param:string):Observable <ICategory[]>{
    return this.http.get<ICategory[]>(`${this._constant.baseAppUrl+param}`).pipe(
      catchError(errorRes =>{
        return throwError(errorRes);
      })
    );
  }

  getProducts(param:string) : Observable <IProduct[]> {
    const url = `${this._constant.baseAppUrl+param}`;
    return this.http.get<IProduct[]>(url).pipe(
      catchError(errorRes =>{
        return throwError(errorRes);
      })
    );
  }

  getFilteredProducts(param:string , categoryId:string): Observable <IProduct[]> {
    const url = `${this._constant.baseAppUrl+param}`;
    return this.http.get<IProduct[]>(url,
      { params: new HttpParams().set('category',categoryId) }
      ).pipe(
      catchError(errorRes =>{
        return throwError(errorRes);
      })
    );
  }

  buyProduct(param:string){
    const url = `${this._constant.baseAppUrl+param}`;
    return this.http.get<IProduct[]>(url);
  }
}