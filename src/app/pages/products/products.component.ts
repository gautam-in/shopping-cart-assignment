import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Select, Store} from '@ngxs/store';
import {Observable, of} from 'rxjs';

import {CategoryModel} from '../../models/category.model';
import {ProductModel} from '../../models/product-model';
import {ShoppingService} from '../../services/shopping/shopping.service';
import {AddToCart, FilterProducts, GetAllProducts} from '../../store/actions/cart.action';
import {CartState} from '../../store/state/cart.state';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  categories: Observable<CategoryModel[]> = of([]);
  @Select(CartState.activeProducts) activeProducts: Observable<ProductModel[]>;
  activeCategory = '';

  constructor(private shoppingService: ShoppingService,
              private route: ActivatedRoute,
              private store: Store) {
  }

  ngOnInit(): void {
    this.getCategories();
    this.store.dispatch(new GetAllProducts()).subscribe(_ => {
      this.route.queryParams.subscribe((queryParams: Params) => {
        this.activeCategory = queryParams.category || '';
        this.store.dispatch(new FilterProducts(this.activeCategory));
      });
    });
  }

  getCategories(): void {
    this.categories = this.shoppingService.getAllEnabledCategoriesInSortedOrder();
  }

  addToCart(product: ProductModel): void {
    this.store.dispatch(new AddToCart(product));
  }
}
