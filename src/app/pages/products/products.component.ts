import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

import {CategoryModel} from '../../models/category.model';
import {ProductModel} from '../../models/product-model';
import {SharedService} from '../../services/shared/shared.service';
import {ShoppingService} from '../../services/shopping/shopping.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  categories: Observable<CategoryModel[]> = of([]);
  allProducts: Observable<ProductModel[]> = of([]);
  activeProducts: Observable<ProductModel[]> = of([]);
  activeCategory = '';

  constructor(private shoppingService: ShoppingService,
              private route: ActivatedRoute,
              private sharedService: SharedService) {
  }

  ngOnInit(): void {
    this.getCategories();
    this.getAllProducts();
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.activeCategory = queryParams.category || '';
      this.filterProducts();
    });
  }

  getCategories(): void {
    this.categories = this.shoppingService.getAllCategories();
  }

  getAllProducts(): void {
    this.allProducts = this.shoppingService.getAllProducts();
    this.activeProducts = this.allProducts.pipe(map(products => [...products]));
  }

  filterProducts(): void {
    this.activeProducts = this.allProducts.pipe(
      map(products => products.filter(product => product.category === this.activeCategory || this.activeCategory === ''))
    );
  }

  addToCart(productId: string): void {
    this.shoppingService.addToCart(productId).subscribe(response => {
      this.sharedService.addToCart(productId);
    });
  }
}
