import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getAllCategories() {
    return this.httpClient.get('/categories');
  }

  getAllProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>('/products');
  }
}
