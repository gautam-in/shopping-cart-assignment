import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Category } from 'src/app/shared/models/category';
import { Product } from 'src/app/shared/models/product';
import { ProductsService } from 'src/app/core/services/products.service';
import { SEOService } from 'src/app/core/services/seo.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  categories: Category[] = [];
  products$: Observable<Product[]> = of([]);

  selectedCategory: Category | null = null;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private seoService: SEOService
  ) {}

  ngOnInit(): void {
    this.seoService.setTitle('Products');
    this.seoService.setDescription(
      'Find a range of great products at unbelievable discounts.'
    );

    this.getCategories();

    this.activatedRoute.queryParamMap.subscribe((map: any) => {
      const category = this.categories.find(
        (category: Category) => category.key === map.params.category
      );

      this.selectedCategory = category ? category : null;

      this.getProducts();
    });
  }

  trackProduct(_: number, product: Product) {
    return product.id;
  }

  selectCategory(category: Category) {
    let categoryKey = null;

    if (this.selectedCategory?.id !== category.id) {
      categoryKey = category.key;
    }

    this.router.navigate([], {
      queryParams: { category: categoryKey },
      queryParamsHandling: 'merge',
    });
  }

  addToCart(product: Product) {
    this.productsService.addToCart(product);
  }

  removeFromCart(product: Product) {
    this.productsService.removeFromCart(product);
  }

  getCategories() {
    this.productsService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  getProducts() {
    this.products$ = this.productsService.getProducts(
      this.selectedCategory?.id
    );
  }
}
