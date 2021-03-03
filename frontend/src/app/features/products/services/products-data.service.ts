import { ProductsListDTO } from '../models/products-list';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay, map, tap } from 'rxjs/operators';
import { baseAPIPath } from 'src/config';
import { CartItem } from 'src/app/features/cart/cart-items.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsDataService {
  constructor(private http: HttpClient) {}
  
  productsList$ = this.getProductsFromAPI$().pipe(
    map((productList) =>
      productList.map((product) => this.transformProductListToCartItem(product))
    ),
    shareReplay(1)
  );

  private getProductsFromAPI$() {
    return this.http.get<ProductsListDTO[]>(`${baseAPIPath}/products`);
  }

  private transformProductListToCartItem(productItem: ProductsListDTO) {
    return {
      ...productItem,
      count: 1,
      totalPrice: productItem.price,
    } as CartItem;
  }
}
