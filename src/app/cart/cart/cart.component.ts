import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.reducer';
import {
  CartProductModel,
  State as CartState,
} from 'src/app/cart/store/cart-list.reducer';
import { MatDialogRef } from '@angular/material/dialog';
import {
  DecreaseProductQuantity,
  IncreaseProductQuantity,
  PlaceOrder,
} from '../store/cart-list.actions';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cart$!: Observable<CartState>;
  constructor(
    private store: Store<AppState>,
    public dialogRef: MatDialogRef<CartComponent>
  ) {}

  ngOnInit(): void {
    this.cart$ = this.store.select('cart');
  }

  closeDialog() {
    this.dialogRef.close();
  }

  removeProductFromCart(index: number) {
    this.store.dispatch(new DecreaseProductQuantity(index));
  }

  addProductsToCart(index: number) {
    this.store.dispatch(new IncreaseProductQuantity(index));
  }

  placeOrder() {
    this.store.dispatch(new PlaceOrder());
    this.closeDialog();
  }
}
