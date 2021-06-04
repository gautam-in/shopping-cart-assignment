import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private httpClient: HttpClient) {}

  getAllCategories() {
    return this.httpClient.get<ICategory[]>(
      '../../assets/server/categories/index.get.json'
    );
  }
}
