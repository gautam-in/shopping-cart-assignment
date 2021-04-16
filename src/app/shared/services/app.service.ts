import { ICartResponse } from '../../../models/cart.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBanner } from '../../../models/banner.model';
import { IProduct } from '../../../models/product.model';
import { ICategory } from '../../../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  product_server_url = 'server/products/index.get.json';
  category_server_url = 'server/categories/index.get.json';
  banner_server_url = ' server/banners/index.get.json';

  constructor(private http: HttpClient) {}

  getBanners(): Observable<IBanner[]> {
    const bannerUrl = this.banner_server_url;
    return this.http.get<IBanner[]>(bannerUrl);
  }

  getCatagories(): Observable<ICategory[]> {
    const categoriesUrl = this.category_server_url;
    return this.http.get<ICategory[]>(categoriesUrl);
  }

  getProducts(): Observable<IProduct[]> {
    const productsUrl = this.product_server_url;
    return this.http.get<IProduct[]>(productsUrl);
  }

  // postProductToCart(productId: string): Observable<ICartResponse> {
  //   const addToCartUrl = `${this.baseUrl}/addToCart`;
  //   return this.http.post<ICartResponse>(addToCartUrl, productId);
  // }

  getLocalItem(key: string): any {
    return localStorage.getItem(key) || null;
  }

  setLocalItem(key: string, value: any): any {
    return localStorage.setItem(key, value);
  }

  removeLocalItem(key: string): any {
    return localStorage.removeItem(key);
  }
}
