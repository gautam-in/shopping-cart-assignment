import { IProduct } from './../../model/product.model';

import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CatalogueService } from 'src/app/services/catalogue.service';
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
  isErrorOccured = false;

  constructor(
    private cartService: CartService,
    private catalogueService: CatalogueService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(simpleChanges): void {
    if (this.filteredProducts && !this.filteredProducts.length) {
      this.displayProducts = this.products;
    } else {
      this.displayProducts = this.filteredProducts;
    }
  }

  addProductToCart(product: IProduct): void {
    this.highlightSelectedProducts(product);
    this.catalogueService.postProductToCart(product.id).subscribe(data => {
      if (data && data.response === 'Success') {
        this.cartService.addProductToCart(product);
      }
    }, error => {
      console.log('error occured', error);
      this.isErrorOccured = true;
    });
  }

  highlightSelectedProducts(selectedProduct: IProduct): void {
    if (this.selectedProductIndexes.indexOf(selectedProduct) === -1) {
      this.selectedProductIndexes.push(selectedProduct);
    }
  }
}
