import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/shared/models/product.model';
import { ICategory } from 'src/app/shared/models/category.model';
import { ProductService } from '../../services/product.service';
import { CategoryService } from 'src/app/shared/services/category.service';
import { ICartItem } from 'src/app/shared/models/cart-item.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass'],
})
export class ProductListComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private activeRouter: ActivatedRoute,
    private router: Router
  ) {}
  categories!: ICategory[];
  products!: ICartItem[];
  defaultCategory = '';
  ngOnInit(): void {
    this.activeRouter.params.subscribe((val) => {
      this.defaultCategory = val.id ? val.id : '';
      this.getProducts(val.id);
    });
    this.categoryService
      .getAllCategories()
      .subscribe((categories: ICategory[]) => {
        this.categories = categories.filter((item) => item.enabled);
      });
  }

  onCategoryChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    if (value) {
      this.router.navigate(['products/' + value]);
    } else {
      this.router.navigate(['products/']);
      this.defaultCategory = '';
    }
  }

  private getProducts(id: string): void {
    this.productService.getAllProducts().subscribe((products: IProduct[]) => {
      this.products = id
        ? products
            .filter((item) => item.category === id)
            .map((item) => ({ product: item, quantity: 0 }))
        : products.map((item) => ({ product: item, quantity: 0 }));
    });
  }
}
