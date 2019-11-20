import { Component, OnInit } from '@angular/core';
import { ProductListService } from './../services/product-list.service';
import { IProduct } from './../models/IProduct';
import { CategoriesService } from './../services/categories.service';
import { ICategory } from './../models/Icategory';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public productList:IProduct[];
  public categoryList:ICategory[];
  public selectedCategoryId:string='';
  public selectedCategory:string='Select Category';
  public productLoading : boolean = true;

  constructor(private route: ActivatedRoute, private _productListService: ProductListService, private categoriesService:CategoriesService) { 
  }

  ngOnInit() {
    this.getCategories();
    this.route.queryParams.subscribe(params=>{
      this.selectedCategoryId = params.category;
      if(this.selectedCategoryId){
        this._productListService.getFilteredProducts(this.selectedCategoryId).subscribe((productList) =>{
          this.productList = productList;
          this.productLoading = false;
        } );
      }else{
        this.getProducts();
      }
    });
  
  }
  
  getProducts(){
    this.productLoading = true;
    this._productListService.getProducts().subscribe((productList) => {
      this.productList = productList;
      this.productLoading = false;
    });
  }

  getCategories(){
    this.categoriesService.getCategories().subscribe((categories)=>this.categoryList = categories);
  }

  getFilteredProducts(categoryObj:ICategory){
    if(categoryObj.id === this.selectedCategoryId){
      this.selectedCategoryId='';
      this.selectedCategory = "Select Category";
      this.getProducts();
    }else{
      this.selectedCategory = categoryObj.name;
      this.selectedCategoryId = categoryObj.id;
      this._productListService.getFilteredProducts(categoryObj.id).subscribe((productList) => this.productList = productList);
    }
  }

}
