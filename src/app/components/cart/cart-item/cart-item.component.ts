import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';

import {CartModel} from '../../../models/cart.model';
import {AddQuantity, DeleteQuantity} from '../../../store/actions/cart.action';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() item = {} as CartModel;

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  addQuantity(itemId: string) {
    this.store.dispatch(new AddQuantity(itemId));
  }

  deleteQuantity(itemId: string) {
    this.store.dispatch(new DeleteQuantity(itemId));
  }

}
