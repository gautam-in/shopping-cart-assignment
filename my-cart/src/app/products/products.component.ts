import { Component, OnInit } from '@angular/core';
import { BackendInteractionService } from '../backend-interaction.service';
import { Product } from '../model/Products.model';
import { Store } from '@ngrx/store';
import { AppState } from '../appState';
import { Category } from '../model/category.model';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productList: Array<Product> = [];
  categoryList: Array<Category> = [];
  selectedCategoryCode: string = '';
  constructor(private dataService: BackendInteractionService, private store: Store<AppState>, private router: ActivatedRoute) { }


  ngOnInit(): void {
    this.getCategories();
    this.getProductList()
  }

  getCategories() {
    this.store.select("categories").subscribe(categories => {
      this.categoryList = categories.categories
    })
    this.checkCategoryQueryParams()
  }

  getProductList() {
    this.dataService.getProducts().subscribe(productList => {
      this.productList = productList
    })
  }

  checkCategoryQueryParams() {

    this.setSelectedCategory(this.router.snapshot.queryParams.category)
  }

  setSelectedCategory(categoryId: string) {
    this.selectedCategoryCode = categoryId
  }
}
