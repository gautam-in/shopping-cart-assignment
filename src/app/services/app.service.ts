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
    return this.httpClient.get('../../assets/server/categories/index.get.json');
  }

  getAllProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>('../../assets/server/products/index.get.json');
  }

  getAllBanners(): Observable<IBanner[]> {
    return this.httpClient.get<IBanner[]>('../../assets/server/banners/index.get.json');
  }
}
