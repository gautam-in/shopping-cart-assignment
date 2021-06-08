import { AfterViewInit, Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  addProduct,
  deleteProduct,
} from 'src/app/features/cart/store/actions/cart.actions';
import { ICartItem } from 'src/app/shared/models/cart-item.model';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.sass'],
})
export class ProductItemComponent implements AfterViewInit {
  @Input() product!: ICartItem;
  constructor(private store: Store<AppState>) {}

  ngAfterViewInit() {
    this.store.select('cartList').subscribe((val) => {
      const productItem = val.cart.find(
        (item) => item.product.id === this.product.product.id
      );
      this.product.quantity = productItem ? productItem.quantity : 0;
    });
  }

  addToCart(cartItem: ICartItem) {
    cartItem.quantity = 1;
    this.store.dispatch(addProduct(cartItem));
  }

  minusQuantity(item: ICartItem) {
    this.store.dispatch(deleteProduct({ id: item.product.id }));
  }
}
