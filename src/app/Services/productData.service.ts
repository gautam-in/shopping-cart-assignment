import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  categoriesList;
  filteredCategory;
  isLoggedInSubject = new BehaviorSubject({ isLoggedIn: false, userName: '' });

  constructor() { }
}
