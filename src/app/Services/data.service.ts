import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  categoriesList;
  filteredCategory;
  isLoggedInSubject = new BehaviorSubject({ isLoggedIn: false, userName: '' });
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor() { }
}
