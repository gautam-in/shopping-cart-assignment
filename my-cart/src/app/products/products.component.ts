import { Component, OnInit } from '@angular/core';
import { BackendInteractionService } from '../backend-interaction.service';
import { Product } from '../model/Products.model';
import { Store } from '@ngrx/store';
import { AppState } from '../appState';
import { Category } from '../model/category.model';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productList : Array<Product> = [];
  categoryList : Array<Category> = [];
  selectedCategoryCode : string = '';
  constructor(private dataService:BackendInteractionService,private store:Store<AppState>) { }

  
  ngOnInit(): void {
    this.getCategories();
    this.getProductList()
  }
  
  getCategories(){
    this.store.select("products").subscribe(products=>{
      this.categoryList = products.categories
    })
  }

  getProductList(){
    this.dataService.getProducts().subscribe(productList=>{
      this.productList = productList
    })
  }

  setSelectedCategory(category:Category){
     this.selectedCategoryCode = category.id
  }
}
