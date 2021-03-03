import { ICartResponse } from './../model/cart.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApidataService {
  constructor(private http: HttpClient) { }


  getBanners(){
    const url = "http://localhost:5000/banners"
    return this.http.get(url);
  }

  getCatagories() {
    const url = "http://localhost:5000/categories"
    return this.http.get(url);
  }

  getProducts() {
    const url = "http://localhost:5000/products"
    return this.http.get(url);
  }

  addProductsToCart(productId) {
    const url = "http://localhost:5000/addToCart"
    return this.http.post<ICartResponse>(url, productId);
  }
}
