import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';

import {ToggleCart} from '../../store/actions/cart.action';
import {CartState} from '../../store/state/cart.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Select(CartState.cartStatus) isCartVisible: Observable<boolean>;
  @Select(CartState.cartQuantity) cartQuantity: Observable<number>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }

  toggleCart() {
    this.store.dispatch(new ToggleCart());
  }

}
