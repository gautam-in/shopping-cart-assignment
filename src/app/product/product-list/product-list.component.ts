import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.reducer';
import { State as ProductState } from '../store/product.reducer';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products$!: Observable<ProductState>;
  constructor(private store: Store<AppState>) {
    this.products$ = this.store.select('products');
  }

  ngOnInit(): void {}
  buyProduct(product: any) {}
}
