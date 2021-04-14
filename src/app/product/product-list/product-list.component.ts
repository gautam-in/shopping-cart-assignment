import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  category: string;
  filterCategory: any = [];
  categoryId: any;

  constructor(
    private _cartService: CartService,
    private _activatedroute: ActivatedRoute,
    private _productService: ProductService
  ) {}

  ngOnInit(): void {
    this._activatedroute.params.subscribe((params: Params) => {
      this.categoryId = params['id'];
      this.fetchProductList(
        this._activatedroute.snapshot.data['productDetail']
      );
    });
  }

  fetchProductList(data) {
    let prod = [];
    if (data.length > 0) {
      data.forEach((element) => {
        if (element.category === this.categoryId) {
          prod.push(element);
        }
      });
      this.filterCategory = this.buildProductArr(prod);
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

  buyProduct(product: any) {
    this._cartService.addProductToCart(product);
  }
}
