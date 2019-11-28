import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBanner } from './../../models/IBanner';
import { ConstantsService } from './constants.service';
import { ICategory } from './../../models/Icategory';
import { IProduct } from './../../models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient, private _constant: ConstantsService) {}

  getBanner(param:string): Observable<IBanner[]>{
    return this.http.get<IBanner[]>(`${this._constant.baseAppUrl+param}`);
  }

  getCategories(param:string):Observable <ICategory[]>{
    return this.http.get<ICategory[]>(`${this._constant.baseAppUrl+param}`);
  }

  getProducts(param:string) : Observable <IProduct[]> {
    const url = `${this._constant.baseAppUrl+param}`;
    return this.http.get<IProduct[]>(url);
  }

  getFilteredProducts(param:string , categoryId:string): Observable <IProduct[]> {
    const url = `${this._constant.baseAppUrl+param}?category=${categoryId}`;
    return this.http.get<IProduct[]>(url);
  }

  buyProduct(param:string){
    const url = `${this._constant.baseAppUrl+param}`;
    return this.http.get<IProduct[]>(url);
  }
}