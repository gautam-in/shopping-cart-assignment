import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from 'src/app/header/header.service';
import { AppService } from 'src/app/services/app.service';
import { ProductService } from '../product.service';

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
  hideShowProductList: boolean = false;
  categoryList: any = [];
  filteredProduct: any = [];

  constructor(
    private _http: HttpClient,
    private _activatedroute: ActivatedRoute,
    private _productService: ProductService,
    private _route: Router,
    private _headerService: HeaderService,
    private _appService: AppService
  ) {}

  ngOnInit(): void {
    this.fetchCategories();
    this.fetchProduct(this._activatedroute.snapshot.data['productDetail']);
  }

  fetchCategories() {
    this._appService.getCatagories().subscribe((data) => {
      this.categories = data;
      this._productService.category = data;
      this.categoryList = this.categories.sort((a, b) => {
        return a.order - b.order;
      });
    });
  }

  fetchProduct(data) {
    if (data.length > 0) {
      this.product = data;
      this._productService.product = data;
      this.productPerRow = this.buildProductArr(data);
      console.log('product per roe===', this.productPerRow);
    }
  }

  buildProductArr(product: any): any {
    let result = [];
    for (var i = 0; i < product.length; i += 4) {
      var row = [];
      for (var x = 0; x < 4; x++) {
        var value = product[i + x];
        if (!value) {
          break;
        }
        row.push(value);
      }
      console.log('the result========', result);
      result.push(row);
    }
    return result;
  }

  getProductByCategory(id: any) {
    this.hideShowProductList = true;
    let prod: any = [];
    // prod = this.product.filter((p) => {
    //   p.category === id;
    // });
    this.product.forEach(element => {
      if( element.category === id)
      prod.push(element)
     
    });
    console.log('product per prod =============', prod);
    this.filteredProduct= this.buildProductArr(prod);
    console.log('product per category =============', this.filteredProduct);
  }

  // buildProductArr(product: any) : void {
  //   for (var i = 0; i < product.length; i += 4) {
  //     var row = [];
  //     for (var x = 0; x < 4; x++) {
  //       var value = product[i + x];
  //       if (!value) {
  //         break;
  //       }
  //       row.push(value);
  //     }
  //     console.log("the result========", this.filteredProduct)
  //     this.filteredProduct.push(row);

  //   }
  // }
}
