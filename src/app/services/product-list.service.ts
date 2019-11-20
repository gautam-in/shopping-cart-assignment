import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './../models/IProduct';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  private baseUrl = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  getProducts() : Observable <IProduct[]> {
    const url = `${this.baseUrl}/products`;
    return this.http.get<IProduct[]>(url);
  }

  getFilteredProducts(categoryId:string): Observable <IProduct[]> {
    const url = `${this.baseUrl}/products?category=${categoryId}`;
    return this.http.get<IProduct[]>(url);
  }
}
