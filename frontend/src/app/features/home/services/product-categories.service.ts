import { map, shareReplay, filter, tap } from 'rxjs/operators';
import { ProductCategoryDTO } from '../models/product-category-dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as _ from 'underscore';
import { baseAPIPath } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoriesService {

  constructor(private http: HttpClient) { }
  
  private readonly categoriesData$ = this.getCategoriesFromAPI$().pipe(shareReplay(1));

  private getCategoriesFromAPI$(): Observable<ProductCategoryDTO[]> {
    return this.http.get<ProductCategoryDTO[]>(`${baseAPIPath}/categories`);
  }

  private transformData(categoryData: ProductCategoryDTO) {
    return {
      ...categoryData,
      imageUrl: categoryData.imageUrl ? 'assets/' + categoryData.imageUrl : 'assets/static/images/category/fruits.png',
    }
  }

  getSortedCategories$(): Observable<ProductCategoryDTO[]> {
    return this.categoriesData$.pipe(
      map(categoriesData => categoriesData.filter(categoryData => categoryData.enabled)),
      map(categoriesData => _.sortBy(categoriesData, 'order')),
      map(categoriesData => categoriesData.map(categoryData => this.transformData(categoryData))),
    )
  }

  getFilteredCategories$(categoryId: string): Observable<ProductCategoryDTO[]> {
    return this.categoriesData$.pipe(
      map(categoriesData => _.sortBy(categoriesData, 'order')),
      map(categoriesData => categoriesData.filter(categoryData => categoryData.id === categoryId)),
      map(categoriesData => categoriesData.map(categoryData => this.transformData(categoryData))),
    )
  }
}
