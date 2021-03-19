import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';

import {CartModel} from '../../models/cart.model';
import {CloseCart} from '../../store/actions/cart.action';
import {CartState} from '../../store/state/cart.state';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @Select(CartState.cartQuantity) cartQuantity: Observable<number>;
  @Select(CartState.totalAmount) totalAmount: Observable<number>;
  @Select(CartState.cartProducts) cartProducts: Observable<CartModel[]>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }

  closeCart() {
    this.store.dispatch(new CloseCart());
  }

}
