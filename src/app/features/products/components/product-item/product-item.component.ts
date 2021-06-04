import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICartItem } from 'src/app/shared/models/cart-item.model';
import { addProduct } from 'src/app/core/store/actions/cart.actions';
import { IProduct } from 'src/app/shared/models/product.model';

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
