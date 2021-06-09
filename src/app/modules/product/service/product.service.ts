import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { CartResponse } from 'src/app/shared/models/cart-response.model';
import { environment } from 'src/environments/environment';
import { Banner } from '../../home/models/banner.model';
import { Category } from '../../home/models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  fetchProducts() {
    return this.http.get<Product[]>(environment.server + '/products').pipe(
      map((resData: Product[]) => {
        return resData.map((e) => {
          if (e.imageURL.startsWith('/static')) {
            e.imageURL = e.imageURL.replace('/static', 'assets');
          }
          return e;
        });
      })
    );
  }

  fetchBanners() {
    return this.http.get<Banner[]>(environment.server + '/banners').pipe(
      map((resData: Banner[]) => {
        return resData.map((e) => {
          if (e?.bannerImageUrl?.startsWith('/static')) {
            e.bannerImageUrl = e.bannerImageUrl.replace('/static', 'assets');
          }
          return e;
        });
      })
    );
  }

  fetchCategories() {
    return this.http.get<Category[]>(environment.server + '/categories').pipe(
      map((resData: Category[]) => {
        return resData.map((e) => {
          let cat = { ...e };
          if (cat?.imageUrl?.startsWith('/static')) {
            cat.imageUrl = cat.imageUrl.replace('/static', 'assets');
          }
          return cat;
        });
      })
    );
  }

  addToCart() {
    return this.http.post<CartResponse>(
      environment.server + '/addToCart',
      null
    );
  }
}
