import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../Store/actions/app.state';
import { Product } from '../../models/products.model';
import * as productActions from '../../Store/actions/cart.actions'
@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  productList: Product[] = []
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.getAddedProducts()
  }

  getAddedProducts() {
    let totalPrice
    this.store.select('cart').subscribe(cart => {
      this.productList = Object.keys(cart.addedProducts).map(productId => {
        totalPrice = cart.addedProducts[productId].quantity * cart.addedProducts[productId].price
        return { ...cart.addedProducts[productId], totalPrice }
      })
    })
  }

  closeModel() {
    (<HTMLElement>document.querySelector('.modal-backdrop')).style.display = 'none';
  }

  increaseQuantity(product: Product) {
    this.store.dispatch(new productActions.IncrementCartItemQuantity(product))
  }

  decreaseQuantity(product: Product) {
    this.store.dispatch(new productActions.DecrementCartItemQuantity(product))
  }

}
