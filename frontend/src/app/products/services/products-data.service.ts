import { ProductsListDTO } from './../models/products-list';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs/operators';
import { baseAPIPath } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {

  constructor(private http: HttpClient) { }
  productsList$ = this.getProductsFromAPI$().pipe(
    shareReplay(1)
  )
  private getProductsFromAPI$() {
    return this.http.get<ProductsListDTO[]>(`${baseAPIPath}/products`);
  }
}
