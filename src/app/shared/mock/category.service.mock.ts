import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICategory } from '../models/category.model';
import { mockCategory } from './category.mock';

@Injectable({
  providedIn: 'root',
})
export class MockCategoryService {
  constructor() {}

  getAllCategories(): Observable<ICategory[]> {
    return of([mockCategory]);
  }
}
