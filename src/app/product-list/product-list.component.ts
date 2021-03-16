import { ICategory } from './../model/category.model';
import { IProduct } from './../model/product.model';
import { CatalogueService } from '../services/catalogue.service';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

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
  isErrorOccured: boolean = false;
  
  constructor(
    private dataService: DataService,
    private catalogueService: CatalogueService
  ) { }

  ngOnInit(): void {
    this.productCategoriesList = this.dataService.categoriesList;
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.catalogueService.getProducts().subscribe(productResponse => {
      this.products = productResponse;
    }, error => {
      console.log('error occured', error)
      this.isErrorOccured = true;
    });
  }

  filterSelectedCategoryList(selectedCategoryId: string, index: number): void {
    this.selectedCatagoryIndex = index;
    this.resetFilter();
    this.productCategoriesList.forEach(category => {
      if (category.id === selectedCategoryId) {
        this.filteredCategory = category;
      }
    });
    this.filterProductsOfSelectedCatagory();
  }

  filterProductsOfSelectedCatagory(): void {
    this.products.forEach((prod: IProduct) => {
      if (prod.category === this.filteredCategory.id) {
        this.filteredProducts.push(prod);
      }
    });
  }

  resetFilter(): void {
    this.dataService.filteredCategory = [];
    this.filteredCategory = [];
    this.filteredProducts = [];
  }
}
