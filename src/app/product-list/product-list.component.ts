import { Component, OnInit, ViewChildren, OnDestroy } from '@angular/core';
import { IProduct } from './../models/IProduct';
import { ApiService } from './../shared/services/api.service';
import { ICategory } from './../models/Icategory';
import { ActivatedRoute, Router } from "@angular/router";
import { CartService } from './../shared/services/cart.service';
import { RouterUrlService } from '../shared/services/routerUrl.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit,OnDestroy {
  public productList:IProduct[];
  public categoryList:ICategory[];
  public selectedCategoryId:string='';
  public selectedCategory:string='Select Category';
  public productLoading : boolean = false;
  public categoryLoading:boolean = false;
  productErrorOccured:boolean = false;
  errorMsg= null;
  errorMsgSub : Subscription;
  constructor(private route: ActivatedRoute, private apiService:ApiService, private cartService: CartService, private routerUrlService: RouterUrlService, private router: Router) { 
  }

  ngOnInit() {
    this.errorMsgSub = this.apiService.error.subscribe(error =>{
      this.errorMsg = error;
    });
    this.getCategories();
    this.route.queryParams.subscribe(params=>{
      this.selectedCategoryId = params.category;
      if(this.selectedCategoryId){
        this.apiService.getFilteredProducts("products",this.selectedCategoryId).subscribe((productList) =>{
          this.productList = productList;
          this.productLoading = false;
          this.productErrorOccured = false;
        },error=>{
          this.productLoading = false;
          this.apiService.error.next(error.message);
          this.productErrorOccured = true;
        });
      }else{
        this.getProducts();
      }
    });
    this.routerUrlService.setPageUrl(this.router.url);
  }
  
  getProducts(){
    this.productLoading = true;
    this.apiService.getProducts("products").subscribe((productList) => {
      this.productList = productList;
      this.productLoading = false;
      this.productErrorOccured = false;
    },error=>{
      this.productLoading = false;
      this.apiService.error.next(error.message);
      this.productErrorOccured = true;
    });
  }

  getCategories(){
    this.categoryLoading= true;
    this.apiService.getCategories("categories").subscribe((categories)=>{
      this.categoryList = categories;
      this.categoryLoading = false;
    });
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

  buynow(product:any){
    this.apiService.buyProduct("addToCart").subscribe(()=>{
      let product_new ={
        "name": product.name,
        "imageURL": product.imageURL,
        "price": product.price,
        "stock": product.stock,
        "id": product.id,
        "count":1
      }
      this.cartService.addCartItem(product_new);
    })
  }

  onCategorySelect(){
    document.getElementById("js-dropdown-content").classList.toggle("show");
  }

  ngOnDestroy(){
    this.errorMsgSub.unsubscribe();
  }

}
