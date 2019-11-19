import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './../models/IProduct';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  private _url = "http://localhost:3000/products";
  constructor(private http: HttpClient) { }

  getProducts() : Observable <IProduct[]> {
    return this.http.get<IProduct[]>(this._url);
  }
}
