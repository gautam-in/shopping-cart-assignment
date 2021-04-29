import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-bakery-product-list',
  templateUrl: './bakery-product-list.component.html',
  styleUrls: ['./bakery-product-list.component.css']
})
export class BakeryProductListComponent implements OnInit {

  bakeryProductList: Product[] = []

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getBakeryProducts().subscribe((bakeryproducts) => {
      this.bakeryProductList = bakeryproducts;
    })
  }

}
