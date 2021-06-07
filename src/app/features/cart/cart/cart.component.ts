import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.reducer';
import { ICartItem } from '../../../shared/models/cart-item.model';
import { addProduct, deleteProduct } from '../store/actions/cart.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass'],
})
export class CartComponent implements OnInit, OnDestroy {
  @Output() close = new EventEmitter();
  cartItem!: ICartItem[];
  storeSub!: Subscription;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.storeSub = this.store.select('cartList').subscribe((cartList) => {
      this.cartItem = cartList.cart;
    });
  }

  closeCart() {
    this.close.emit('');
  }

  plusQuantity(item: ICartItem) {
    this.store.dispatch(addProduct(item));
  }

  minusQuantity(item: ICartItem) {
    this.store.dispatch(deleteProduct({ id: item.product.id }));
  }

  get totalAmount(): number {
    let total = 0;
    for (let item of this.cartItem) {
      total += item.product.price * item.quantity;
    }
    return total;
  }
  
  ngOnDestroy() {
    if (this.storeSub) {
      this.storeSub.unsubscribe();
    }
  }
}
