import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICartItem } from '../../../shared/models/cart-item.model';
import { addProduct, deleteProduct } from '../../store/actions/cart.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass'],
})
export class CartComponent implements OnInit {
  @Output() close = new EventEmitter();
  cartItem!: ICartItem[];
  constructor(private store: Store<{ cartList: ICartItem[] }>) {}

  ngOnInit(): void {
    this.store.select('cartList').subscribe((val) => {
      this.cartItem = val;
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
}