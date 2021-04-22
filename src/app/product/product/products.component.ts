import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartComponent } from 'src/app/shared/component/cart/cart.component';
import { AppService } from 'src/app/shared/services/app.service';
import { ProductService } from '../product.service';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { IProduct } from 'src/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = [];
  // finalProduct:  IProduct[] = [];
  // showFooter: boolean =true;

  constructor(
    private _activatedroute: ActivatedRoute,
    private _cartService: CartService
  ) {}

  ngOnInit(): void {
    this.fetchProduct(this._activatedroute.snapshot.data['productDetail']);
  }

  fetchProduct(data) {
    if (data.length > 0) {
      this.products = data;
      // this._productService.product = data;
    }
  }

  buyProduct(product: IProduct) {
    this._cartService.addProductToCart(product);
  }
}
