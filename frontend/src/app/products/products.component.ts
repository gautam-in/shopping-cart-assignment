import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category, Product } from '../interfaces';
import { ApiService } from '../services/api.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  categories$: Observable<Category[]> = of([]);
  products: Product[] = [];
  filteredProducts$: Observable<Product[]> = of([]);
  manuExpand = false;

  constructor(
    readonly apiService: ApiService,
    readonly dataService: DataService) {
    this.categories$ = this.apiService.getCategories()
      .pipe(map(categories => categories.filter(c => c.order > 0).sort((a, b) => a.order - b.order)));

    const products$ = this.apiService.getProducts();
    this.filteredProducts$ =
      combineLatest([products$, this.dataService.selectedCategory$])
        .pipe(map(([products, category]) => category ? products.filter(p => p.category === category?.id) : products));
  }

  ngOnInit(): void {
  }

  categoryselected(category: Category) {
    this.dataService.setSelectedCategory(category);
    this.manuExpand = false;
  }

  selectProduct(product: Product) {
    this.dataService.setSelectedProducts({...product, count: 1});
  }
}
