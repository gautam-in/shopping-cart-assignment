import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { addProduct } from 'src/app/features/cart/store/actions/cart.actions';
import { IProduct } from 'src/app/shared/models/product.model';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.sass'],
})
export class ProductItemComponent {
  @Input() product!: IProduct;
  constructor(private store: Store<AppState>) {}
  addToCart(item: IProduct) {
    const cartItem = {
      product: item,
      quantity: 1,
    };
    this.store.dispatch(addProduct(cartItem));
  }
}
