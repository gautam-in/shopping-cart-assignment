import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { productsUrl } from 'src/app/config/api';
import { babyproductsUrl } from 'src/app/config/api';
import { bakeryproductsUrl } from 'src/app/config/api';
import { beautyproductsUrl } from 'src/app/config/api';

import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(productsUrl);
  }

  getBabyProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(babyproductsUrl);
  }

  getBakeryProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(bakeryproductsUrl);
  }

  getBeautyProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(beautyproductsUrl);
  }
}
