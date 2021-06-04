import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from 'src/app/shared/models/category.model';
import { IProduct } from 'src/app/shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getAllCategories(): Observable<ICategory[]> {
    return this.httpClient.get<ICategory[]>(
      '../../assets/server/categories/index.get.json'
    );
  }

  getAllProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(
      '../../assets/server/products/index.get.json'
    );
  }
}
