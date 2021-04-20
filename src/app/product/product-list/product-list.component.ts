import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  finalProduct: any = [];
  categoryList: any = [];
 
  isFilterApplied: boolean = false;

  constructor(
    private _activatedroute: ActivatedRoute,
    private _appService: AppService,
    private _route: Router
  ) {}

  ngOnInit(): void {
    this._activatedroute.params.subscribe((params: Params) => {
      const categoryId = params['id'];
      if (categoryId) {
        this._appService.activeCategoryId = categoryId; 
        this.fetchProductList(
          this._activatedroute.snapshot.data['productDetail'], categoryId
        );
        this.isFilterApplied = true;
      } else {
        this.isFilterApplied = false;
        this.fetchAllProduct(this._activatedroute.snapshot.data['productDetail']);
      }
      this.fetchCategories(this._activatedroute.snapshot.data['productDetail']);
    });
  }

  fetchAllProduct(data) {
    if (data[0] && data[0].length > 0) {
      this._appService.product = data[0];
      this.finalProduct = this.buildProductArr(data[0]);
    }
    
  }

  fetchProductList(data, categoryId) {
    let prod = [];
    if (data[0] && data[0].length > 0) {
      data[0].forEach((element) => {
        if (element.category === categoryId) {
          prod.push(element);
        }
      });
      this.finalProduct = this.buildProductArr(prod);
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
      result.push(row);
    }
    return result;
  }

  fetchCategories(data) {
      this._appService.category = data[1];
      this.categoryList = this._appService.category.sort((a, b) => {
        return a.order - b.order;
      });
  }

  getProductByCategory(id: any) {
    this._appService.activeCategoryId = id;
    if(this._appService.activeCategoryId === id) {
      this.isFilterApplied = !this.isFilterApplied;
    }
    if(this.isFilterApplied) {
      this._route.navigate(['SabkaBaZaar/product/list', id]);
    } else {
      this._route.navigate(['SabkaBaZaar/product']);
    }
   
  }

  buyProduct(product: any) {
    this._appService.addToCart(product);
  }

}
