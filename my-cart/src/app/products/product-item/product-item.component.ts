import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appState';
import { Product } from 'src/app/model/Products.model';
import * as productActions from './../productions-actions'

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
  }

  addToCart(){
    this.store.dispatch(new productActions.AddCartItems({...this.product,quantity:1}))
  }

}
