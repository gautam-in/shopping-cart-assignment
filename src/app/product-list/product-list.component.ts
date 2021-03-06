import { ICategory } from './../model/category.model';
import { IProduct } from './../model/product.model';
import { ApidataService } from './../Services/apidata.service';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  selectedCatagoryIndex: number;
  productCategoriesList: ICategory[] = [];
  products: IProduct[];
  filteredCategory;
  filteredProducts: IProduct[] = [];

  constructor(
    private _dataService: DataService,
    private _apiService: ApidataService
  ) { }

  ngOnInit(): void {
    this.productCategoriesList = this._dataService.categoriesList;
    this.getAllProducts();
  }

  getAllProducts() {
    this._apiService.getProducts().subscribe(productResponse => {
      this.products = productResponse;
    });
  }

  filterSelectedCategoryList(selectedCategoryId: string, index: number) {
    this.selectedCatagoryIndex = index;
    this.resetFilter();
    this.productCategoriesList.forEach(category => {
      if (category.id === selectedCategoryId) {
        this.filteredCategory = category;
      }
    });
    this.FilterProductsOfSelectedCatagory();
  }

  FilterProductsOfSelectedCatagory() {
    this.products.forEach((prod: IProduct) => {
      if (prod.category === this.filteredCategory.id) {
        this.filteredProducts.push(prod);
      }
    });
  }

  resetFilter() {
    this._dataService.filteredCategory = [];
    this.filteredCategory = [];
    this.filteredProducts = [];
  }
}
