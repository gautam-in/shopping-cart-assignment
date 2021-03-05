import { IProductResponse } from './../../model/product.model';

import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ApidataService } from 'src/app/Services/apidata.service';
import { CartService } from 'src/app/Services/cart.service';
import { DataService } from 'src/app/Services/data.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnChanges {

  @Input() products: IProductResponse;
  @Input() filteredProducts;
  displayProducts;

  constructor(
    private _cartService: CartService,
    private _apiService: ApidataService,
    private _dataService: DataService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(simpleChanges) {
    if(this.filteredProducts && !this.filteredProducts.length) {
      this.displayProducts = this.products;
    } else{
      this.displayProducts = this.filteredProducts;
    }
  }

  addProductToCart(product) {
    this._apiService.addProductsToCart(product.id).subscribe(data => {
      if (data && data.response === 'Success') {
        this._cartService.addProduct(product);
      }
    })

  }
}
