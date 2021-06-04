import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/models/product.model';
import { ICategory } from 'src/app/shared/models/category.model';
import { ProductService } from '../../services/product.service';

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
  categories!: ICategory[];
  products!: IProduct[];

  ngOnInit(): void {
    this.activeRouter.params.subscribe((val) => {
      this.getProducts(val.id);
    });
    this.productService
      .getAllCategories()
      .subscribe((categories: ICategory[]) => {
        this.categories = categories.filter((item) => item.enabled);
      });
  }

  private getProducts(id: string) {
    this.productService.getAllProducts().subscribe((products: IProduct[]) => {
      this.products = id
        ? products.filter((item) => item.category === id)
        : products;
    });
  }
}
