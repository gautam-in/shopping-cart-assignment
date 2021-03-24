import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Category } from 'src/app/shared/models/category';
import { Product } from 'src/app/shared/models/product';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  baseUrl = environment.apiBaseUrl;
  categoriesUrl = 'categories';
  productsUrl = 'products';

  products: Product[] = [];

  constructor(private http: HttpClient, private cartService: CartService) {}

  addToCart(product: Product) {
    if (product && product.stock > 0) {
      this.cartService.addToCart(product);
      product.stock--;
      product.quantityInCart = product.quantityInCart
        ? product.quantityInCart + 1
        : 1;
    }
  }

  removeFromCart(product: Product) {
    if (product && product.quantityInCart > 0) {
      this.cartService.removeFromCart(product);
      product.stock++;
      product.quantityInCart--;
    }
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}/${this.categoriesUrl}`);
  }

  getProducts(categoryId: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/${this.productsUrl}`).pipe(
      map((products: any) => {
        return (products || []).filter((product: Product) =>
          categoryId ? categoryId === product.category : true
        );
      }),
      // keep reference of products in the service
      tap((products) => (this.products = products))
    );
  }
}
