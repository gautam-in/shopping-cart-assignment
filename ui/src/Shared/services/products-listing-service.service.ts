import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Categories } from '../models/Categories';
import { Products } from '../models/Products';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsListingServiceService {

  constructor(private httpClient: HttpClient) { }
  apiURL: string = environment.apiUrl;
  productsUrl: string = `${this.apiURL}/products`;
  categoriesUrl: string = `${this.apiURL}/categories`;
  addToCartUrl: string = `${this.apiURL}/addToCart`;

  getProducts(): Observable<Products[]> {
    return this.httpClient.get<Products[]>(this.productsUrl)
      .pipe(response => response);
  }
  getCategories(): Observable<Categories[]> {
    return this.httpClient.get<Categories[]>(this.categoriesUrl)
      .pipe(response => response);
  }
  addExpenseEntry(productID: string): Observable<any> {
    return this.httpClient.post<any>(this.addToCartUrl, productID)
      .pipe(response => response);
  }
}
