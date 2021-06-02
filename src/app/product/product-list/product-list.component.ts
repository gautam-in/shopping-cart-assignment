import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.reducer';
import { State as ProductState } from '../store/product.reducer';
import { State as CartState } from 'src/app/cart/store/cart-list.reducer';
import * as CartListActions from 'src/app/cart/store/cart-list.actions';
import { SeoService } from 'src/app/services/seo.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products$!: Observable<ProductState>;
  cart$!: Observable<CartState>;
  constructor(private store: Store<AppState>, private seo: SeoService) {
    this.products$ = this.store.select('products');
    this.cart$ = this.store.select('cart');
  }

  ngOnInit(): void {
    this.seo.setMetaData(
      'Sabka Bazar | Products',
      'Products',
      'Browse diiferent products available in store'
    );
  }
  buyProduct(product: any) {
    this.store.dispatch(new CartListActions.AddProduct(product));
  }

  onDelete(index: number) {
    this.store.dispatch(new CartListActions.DeleteProduct(index));
  }
}
