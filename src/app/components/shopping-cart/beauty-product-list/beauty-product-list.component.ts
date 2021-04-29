import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-beauty-product-list',
  templateUrl: './beauty-product-list.component.html',
  styleUrls: ['./beauty-product-list.component.css']
})
export class BeautyProductListComponent implements OnInit {

  beautyProductList: Product[] = []

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getBeautyProducts().subscribe((beautyproducts) => {
      this.beautyProductList = beautyproducts;
    })
  }

}
