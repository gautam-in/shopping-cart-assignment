import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  categoriesList;
  productList;
  allProducts;
  filteredCategory;
  
  constructor() { }
}
