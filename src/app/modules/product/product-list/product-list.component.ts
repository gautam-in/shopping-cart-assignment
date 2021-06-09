import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Enter } from 'src/app/core/common/animations/enter.animation';
import { SeoService } from 'src/app/core/services/seo.service';
import { AppState } from 'src/app/models/app-state.model';
import { CartState } from 'src/app/shared/models/cart-state.model';
import * as CartListActions from 'src/app/shared/store/actions/cart-list.actions';
import { ProductState } from '../models/product-state.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  animations: [Enter],
  host: { '[@Enter]': '' },
})
export class ProductListComponent implements OnInit {
  products$!: Observable<ProductState>;
  cart$!: Observable<CartState>;
  isMobile = false;

  constructor(
    private store: Store<AppState>,
    private seo: SeoService,
    private media: MediaObserver
  ) {
    this.cart$ = this.store.select('cart');
    this.products$ = combineLatest([
      this.store.select('products'),
      this.cart$,
    ]).pipe(
      map(([productState, cartState]) => {
        let prods = { ...productState };
        prods.currentProducts = prods.currentProducts.map((prod: any) => {
          let prodCopy = { ...prod };
          prodCopy.productInCart =
            cartState.products.find((cartProd) => cartProd.sku === prod.sku)
              ?.count || 0;
          return prodCopy;
        });
        return prods;
      })
    );

    this.media.asObservable().subscribe((e) => {
      this.isMobile = media.isActive('lt-xs');
    });
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
