import { ICartResponse } from './../model/cart.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBannerResponse } from '../model/banner.model';
import { IProductResponse } from '../model/product.model';
import { ICategoryResponse } from '../model/category.model';

@Injectable({
  providedIn: 'root'
})
export class ApidataService {

  url: string = "http://localhost:5000";

  constructor(private http: HttpClient) { }

  getBanners(): Observable<IBannerResponse[]> {
    const bannerUrl = `${this.url}/banners`;
    return this.http.get<IBannerResponse[]>(bannerUrl);
  }

  getCatagories(): Observable<ICategoryResponse[]> {
    const categoriesUrl = `${this.url}/categories`;
    return this.http.get<ICategoryResponse[]>(categoriesUrl);
  }

  getProducts(): Observable<IProductResponse[]> {
    const productsUrl = `${this.url}/products`;
    return this.http.get<IProductResponse[]>(productsUrl);
  }

  addProductsToCart(productId: string): Observable<ICartResponse> {
    const addToCartUrl = `${this.url}/addToCart`;
    return this.http.post<ICartResponse>(addToCartUrl, productId);
  }
}
