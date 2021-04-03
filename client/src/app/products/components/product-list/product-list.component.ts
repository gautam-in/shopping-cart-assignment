import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { tap } from 'rxjs/operators';

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
  products: Product[] = [];
  filteredProducts: Product[] = [];

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

    combineLatest([
      this.getCategories(),
      this.getProducts(),
      this.activatedRoute.queryParamMap,
    ]).subscribe(([_, __, map]: [Category[], Product[], any]) => {
      this.filterProducts(map.params.category);
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

  filterProducts(categoryKey: string) {
    const category = this.categories.find(
      (category: Category) => category.key === categoryKey
    );

    this.selectedCategory = category ? category : null;

    this.filteredProducts = (this.products || []).filter((product: Product) =>
      this.selectedCategory && this.selectedCategory.id
        ? this.selectedCategory.id === product.category
        : true
    );
  }

  addToCart(product: Product) {
    this.productsService.addToCart(product);
  }

  removeFromCart(product: Product) {
    this.productsService.removeFromCart(product);
  }

  getCategories() {
    return this.productsService.getCategories().pipe(
      tap((categories) => {
        this.categories = categories;
      })
    );
  }

  getProducts() {
    return this.productsService
      .getProducts()
      .pipe(tap((products: Product[]) => (this.products = products)));
  }
}
