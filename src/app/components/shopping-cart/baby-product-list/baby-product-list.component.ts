import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-baby-product-list',
  templateUrl: './baby-product-list.component.html',
  styleUrls: ['./baby-product-list.component.css']
})
export class BabyProductListComponent implements OnInit {

  babyProductList: Product[] = []

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getBabyProducts().subscribe((babyproducts) => {
      this.babyProductList = babyproducts;
    })
  }

}
