import { Observable, of } from 'rxjs';
import { ICategory } from '../models/category.model';
import { mockCategory } from './category.mock';

export class MockCategoryService {
  constructor() {}

  getAllCategories(): Observable<ICategory[]> {
    return of([{ ...mockCategory }]);
  }
}
