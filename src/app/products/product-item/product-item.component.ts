import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICartItem } from 'src/app/models/cart-item.model';
import { addProduct } from 'src/app/store/cart.actions';
import { IProduct } from '../models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.sass'],
})
export class ProductItemComponent implements OnInit {
  @Input() product!: IProduct;
  constructor(private store: Store<{ cartList: ICartItem[] }>) {}

  ngOnInit(): void {}

  addToCart(item: IProduct) {
    const cartItem: ICartItem = {
      product: item,
      quantity: 1,
    };
    this.store.dispatch(addProduct(cartItem));
  }
}
