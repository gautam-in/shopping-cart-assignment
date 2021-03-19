import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {AddToCartResponse} from '../../models/add-to-cart-response.model';
import {BannersModel} from '../../models/banners.model';
import {CategoryModel} from '../../models/category.model';
import {ProductModel} from '../../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  serverUrl = 'http://localhost:3000/api/';

  constructor(private httpClient: HttpClient) {
  }

  getAllActiveBannersInSortedOrder(): Observable<BannersModel[]> {
    return this.httpClient.get<BannersModel[]>(this.serverUrl + 'banners').pipe(
      map(banners => banners
        .filter(banner => banner.isActive)
        .sort((banner, previousBanner) => banner.order - previousBanner.order)
      )
    );
  }

  getAllEnabledCategoriesInSortedOrder(): Observable<CategoryModel[]> {
    return this.httpClient.get<CategoryModel[]>(this.serverUrl + 'categories').pipe(
      map(categories => categories
        .filter(category => category.enabled)
        .sort((category, previousCategory) => category.order - previousCategory.order)
      )
    );
  }

  getAllProducts(): Observable<ProductModel[]> {
    return this.httpClient.get<ProductModel[]>(this.serverUrl + 'products');
  }

  addToCart(productId: string): Observable<AddToCartResponse> {
    return this.httpClient.post<AddToCartResponse>(this.serverUrl + 'addToCart', {productId});
  }
}
