import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.reducer';
import { State as CategoryState } from 'src/app/home/store/category.reducer';
import { State as ProductState } from 'src/app/product/store/product.reducer';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  categories$!: Observable<CategoryState>;
  products$!: Observable<ProductState>;
  constructor(private store: Store<AppState>) {
    this.categories$ = this.store.select('categories');
    this.products$ = this.store.select('products');
  }

  ngOnInit(): void {}
}
