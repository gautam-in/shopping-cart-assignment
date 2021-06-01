import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBanner } from '../models/banner.model';
import { IProduct } from '../products/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  categories: any;
  constructor(private httpClient: HttpClient) {}

  getAllCategories() {
    return this.httpClient.get('/categories');
  }

  getAllProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>('/products');
  }

  getAllBanners(): Observable<IBanner[]> {
    return this.httpClient.get<IBanner[]>('/banners');
  }
}
