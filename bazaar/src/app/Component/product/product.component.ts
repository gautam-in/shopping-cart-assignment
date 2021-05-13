import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { ShareServiceService } from 'src/app/service/share-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  categoryData = [];
  productData = [];
  keyName: string
  categoryId: string;
  allProductData= [];
 
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _shareService : ShareServiceService ) { }

  ngOnInit(): void {

    this.getCategories();

    this._route.params.subscribe(parms => {
      this.categoryId = parms['id']
      this.getProducts();
    })

  }


  getCategories() {
    this._httpService.getCategoriesService().subscribe(res => {
     this.categoryData = res;
    }, err => {
      console.error('error in product page')
    })
  }


  getProducts() {

    this._httpService.getProductService().subscribe((res: any) => {
     
      this.allProductData = res
      this.filterData(this.categoryId);

    }, err => {
      console.error('error in product page')
    })
  }

  filterData(categoryId) {

    if (categoryId == null || categoryId == undefined || categoryId == '') {
      this.productData = this.allProductData;
    } else {
      this.productData = this.allProductData.filter(res => {
        return res.category == categoryId;
      })
      this.categoryId = categoryId;
    }

  }

  addItem(item) {
    this._httpService.addProductService(item.id).subscribe((res:any) => {
      if (res.response === 'Success') {
        this._shareService.addCart(item);
      }
    })
   
  }


  
    selected() {
      this.categoryData.forEach((category) => {
        if (category.key === this.keyName) {
          this.categoryId = category.id;
          this.filterData(this.categoryId)
        }
      });
    }








}
