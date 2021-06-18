import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Banner, Category, Product } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly rootURL = '/api';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.rootURL + '/getProducts');
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.rootURL + '/getCategories');
  }

  getBanners(): Observable<Banner[]> {
    return this.http.get<Banner[]>(this.rootURL + '/getBanners');
  }
}
