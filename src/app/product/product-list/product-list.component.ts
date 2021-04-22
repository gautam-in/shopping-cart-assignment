import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { IProduct } from 'src/models/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  filteredProducts: IProduct[] = [];
  categoryId: string;

  constructor(
    private _cartService: CartService,
    private _activatedroute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this._activatedroute.params.subscribe((params: Params) => {
      this.categoryId = params['id'];
      this.fetchProductList(
        this._activatedroute.snapshot.data['productDetail']
      );
    });
  }

  fetchProductList(products: IProduct[]) {
    let prod = [];
    if (products.length > 0) {
      products.forEach((product) => {
        if (product.category === this.categoryId) {
          prod.push(product);
        }
      });
      this.filteredProducts = prod
    }
  }


  buyProduct(product: IProduct) {
    this._cartService.addProductToCart(product);
  }
}
