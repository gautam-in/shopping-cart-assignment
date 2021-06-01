import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass'],
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService) {
    
  }
  categories!: any;
  products!: IProduct[];

  ngOnInit(): void {
    this.productService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
    });
    this.productService.getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
