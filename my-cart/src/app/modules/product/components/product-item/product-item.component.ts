import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/Store/actions/app.state';
import { Product } from 'src/app/models/products.model';
import * as productActions from '../../../../Store/actions/cart.actions'

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  addToCart() {
    this.store.dispatch(new productActions.IncrementCartItemQuantity({ ...this.product, quantity: 1 }))
  }

}
