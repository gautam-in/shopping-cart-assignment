import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/Category';
import { Product } from '../models/Product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsListingService {

  constructor(private httpClient: HttpClient) { }
  productsUrl: string = `${environment.apiUrl}/products`;
  categoriesUrl: string = `${environment.apiUrl}/categories`;
  addToCartUrl: string = `${environment.apiUrl}/addToCart`;

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.productsUrl)
      .pipe(response => response);
  }
  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.categoriesUrl)
      .pipe(response => response);
  }
}
