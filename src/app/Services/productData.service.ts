import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { ICategory } from '../model/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  categoriesList: ICategory[];
  filteredCategory: ICategory[];
  isLoggedInSubject = new BehaviorSubject({ isLoggedIn: false, userName: '' });

  constructor() { }
}
