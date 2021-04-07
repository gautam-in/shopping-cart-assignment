import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  product: any = [];
  categories: any = [];
  productPerRow: any = [];
  sub: any;
  categoryName: any;

  constructor(
    private _http: HttpClient,
    private Activatedroute: ActivatedRoute
  ) {

    this.categoryName= this.Activatedroute.snapshot.paramMap.get("category");
    console.log("pagenum=======" , this.sub)
  }

  ngOnInit(): void {
    this.fetchCategories();
    // this.fetchProduct();
    // if(this.categoryName){
    //   this.getProductByCategory(this.categoryName)
    // }
  }

  fetchCategories() {
    this._http.get('server/categories/index.get.json').subscribe((data) => {
      this.categories = data;
      this.fetchProduct();
    });
  }

  fetchProduct() {
    this._http.get('server/products/index.get.json').subscribe((data) => {
      this.product = data;
      if(this.categoryName){
        this.getProductByCategory(this.categoryName)
      }else{
        this.buildProductArr(this.product);
      }
     
    });
  }

  buildProductArr(product: any) {
    for (var i = 0; i < product.length; i += 4) {
      var row = [];
      for (var x = 0; x < 4; x++) {
        var value = product[i + x];
        if (!value) {
          break;
        }
        row.push(value);
      }
      this.productPerRow.push(row);
    }
    console.log(this.productPerRow);
  }

  getProductByCategory(category: any) {
    let prod: any = [];
    prod = this.product;
    this.productPerRow = [];
    let productId = this.categories.find((x) => x.name == category).id;
    prod = prod.filter((y) => y.category == productId);
    this.buildProductArr(prod);
    console.log('product per category =============', this.productPerRow);
  }
}
