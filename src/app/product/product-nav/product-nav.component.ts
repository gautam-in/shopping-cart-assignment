import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/shared/services/app.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-nav',
  templateUrl: './product-nav.component.html',
  styleUrls: ['./product-nav.component.scss'],
})
export class ProductNavComponent implements OnInit {
  categoryList: any = [];
  categories: any = [];
  constructor(
    private _appService: AppService,
    private _productService: ProductService,
    private _route: Router
  ) {}

  ngOnInit(): void {
    this.fetchCategories();
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

  getProductByCategory(id: any) {
    this._route.navigate(['app/product/list', id]);
  }
}
