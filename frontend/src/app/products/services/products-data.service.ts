import { ProductsList } from './../models/products-list';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseAPIPath } from 'src/constants';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {

  constructor(private http: HttpClient) { }
  productsList$ = this.getProductsFromAPI$().pipe(
    shareReplay(1)
  )
  private getProductsFromAPI$() {
    return this.http.get<ProductsList[]>(`${baseAPIPath}/products`);
  }
}
