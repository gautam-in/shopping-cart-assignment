import { map, tap } from 'rxjs/operators';
import { ProductCategoryDTO } from './../models/product-category-dto';
import { baseAPIPath } from './../../../constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as _ from 'underscore';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoriesService {

  constructor(private http: HttpClient) { }
  
  private readonly categoriesData$ = this.getCategoriesFromAPI$();

  private getCategoriesFromAPI$(): Observable<ProductCategoryDTO[]> {
    return this.http.get<ProductCategoryDTO[]>(`${baseAPIPath}/categories`);
  }

  private transformData(categoryData: ProductCategoryDTO) {
    return {
      name: categoryData.name,
      key: categoryData.key,
      description: categoryData.description,
      enabled: categoryData.enabled,
      order: categoryData.order,
      imageUrl: categoryData.imageUrl ? 'assets/' + categoryData.imageUrl : 'assets/static/images/category/fruits.png',
      id: categoryData.id
    }
  }

  getSortedCategories$(): Observable<ProductCategoryDTO[]> {
    return this.categoriesData$.pipe(
      map(categoriesData => _.sortBy(categoriesData, 'order')),
      map(categoriesData => categoriesData.map(categoryData => this.transformData(categoryData)))
    )
  }
}
