import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { Product } from '../interfaces/product';
import { Banner } from '../interfaces/banner';
import { Category } from '../interfaces/category';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  allProducts: Product[] = [];
  selectedCategory: Product[] = [];
  private productList = new Subject<Product[]>();
  private selectedList = new BehaviorSubject<Product[]>([]);

  // GET method to get all banners for carousel
  getBanners(): Observable<Banner[]> {
    return this.http.get<Banner[]>(`${environment.port}` + '/banners');
  }

  // GET method to get all categories
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.port}` + '/categories');
  }

  // GET method to get all products
  getProducts(): Observable<Product[]> {
    this.http
      .get<Product[]>(`${environment.port}` + '/products')
      .subscribe((res) => {
        this.allProducts = res;
        this.productList.next(this.allProducts);
      });
    return this.productList.asObservable();
  }

  // get products of selected category
  selectedCategoryProducts(categoryId: string): Observable<Product[]> {
    this.selectedCategory = this.allProducts.filter(
      (product: Product) => product.category === categoryId
    );

    this.selectedList.next(this.selectedCategory);
    return this.selectedList.asObservable();
  }
}
