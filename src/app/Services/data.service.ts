import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  categoriesList;
  filteredCategory;
  
  constructor() { }
}
