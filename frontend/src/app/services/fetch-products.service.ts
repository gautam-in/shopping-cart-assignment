import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FetchProductsService {
  constructor(private http: HttpClient) {}

  port: string = 'http://localhost:3000';
  getBanners = () => {
    return this.http.get(`${this.port}` + '/banners');
  };

  getCategories = () => {
    return this.http.get(`${this.port}` + '/categories');
  };

  getProducts = () => {
    return this.http.get(`${this.port}` + '/products');
  };

  //http://localhost:3000/addToCart
}
