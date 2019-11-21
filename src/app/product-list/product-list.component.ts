import { Component, OnInit } from '@angular/core';
import { IProduct } from './../models/IProduct';
import { ApiService } from './../shared/services/api.service';
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

  constructor(private route: ActivatedRoute, private apiService:ApiService) { 
  }

  ngOnInit() {
    this.getCategories();
    this.route.queryParams.subscribe(params=>{
      this.selectedCategoryId = params.category;
      if(this.selectedCategoryId){
        this.apiService.getFilteredProducts("products",this.selectedCategoryId).subscribe((productList) =>{
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
    this.apiService.getProducts("products").subscribe((productList) => {
      this.productList = productList;
      this.productLoading = false;
    });
  }

  getCategories(){
    this.apiService.getCategories("categories").subscribe((categories)=>this.categoryList = categories);
  }

  getFilteredProducts(categoryObj:ICategory){
    if(categoryObj.id === this.selectedCategoryId){
      this.selectedCategoryId='';
      this.selectedCategory = "Select Category";
      this.getProducts();
    }else{
      this.selectedCategory = categoryObj.name;
      this.selectedCategoryId = categoryObj.id;
      this.apiService.getFilteredProducts("products",categoryObj.id).subscribe((productList) => this.productList = productList);
    }
    this.onCategorySelect()
  }

  onCategorySelect(){
    document.getElementById("js-dropdown-content").classList.toggle("show");
  }

}
