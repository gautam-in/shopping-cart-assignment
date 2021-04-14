import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CartComponent } from 'src/app/shared/component/cart/cart.component';
import { HeaderService } from 'src/app/header/header.service';
import { AppService } from 'src/app/shared/services/app.service';
import { ProductService } from '../product.service';
import { CartService } from 'src/app/shared/services/cart/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  product: any = [];
  finalProduct: any = [];


  constructor(
    private _activatedroute: ActivatedRoute,
    private _productService: ProductService,
    private _appService: AppService,
    public dialog: MatDialog,
    private _cartService: CartService
  ) {}

  ngOnInit(): void {
    this.fetchProduct(this._activatedroute.snapshot.data['productDetail']);
  }

  
  fetchProduct(data) {
    if (data.length > 0) {
      this.product = data;
      this._productService.product = data;
      this.finalProduct = this.buildProductArr(data);
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
