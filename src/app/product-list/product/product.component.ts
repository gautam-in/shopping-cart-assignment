import { IProduct } from './../../model/product.model';

import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ApidataService } from 'src/app/services/apidata.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnChanges {

  @Input() products: IProduct[];
  @Input() filteredProducts: IProduct[];
  displayProducts: IProduct[];
  selectedProductIndexes = [];

  constructor(
    private _cartService: CartService,
    private _apiService: ApidataService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(simpleChanges) {
    if (this.filteredProducts && !this.filteredProducts.length) {
      this.displayProducts = this.products;
    } else {
      this.displayProducts = this.filteredProducts;
    }
  }

  addProductToCart(product: IProduct) {
    this.highlightSelectedProducts(product);
    this._apiService.addProductsToCart(product.id).subscribe(data => {
      if (data && data.response === 'Success') {
        this._cartService.addProductToCart(product);
      }
    });
  }

  highlightSelectedProducts(selectedProduct: IProduct) {
    if (this.selectedProductIndexes.indexOf(selectedProduct) === -1) {
      this.selectedProductIndexes.push(selectedProduct);
    }
    // else {
    //   const index = this.selectedProductIndexes.indexOf(selectedProduct);
    //   this.selectedProductIndexes.splice(index, 1);
    // }
  }
}
