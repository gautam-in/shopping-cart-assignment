import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass'],
})
export class ProductListComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private activeRouter: ActivatedRoute
  ) {}
  categories!: any[];
  products!: IProduct[];

  ngOnInit(): void {
    this.activeRouter.params.subscribe((val) => {
      this.getProducts(val.id);
    });
    this.productService.getAllCategories().subscribe((categories: any[]) => {
      console.log(categories);
      this.categories = categories.filter((item) => item.imageUrl);
    });
  }

  getProducts(id: string) {
    this.productService.getAllProducts().subscribe((products) => {
      this.products = id
        ? products.filter((item) => item.category === id)
        : products;
    });
  }
}
