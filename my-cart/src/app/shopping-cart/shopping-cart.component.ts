import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../appState';
import { Product } from '../model/Products.model';
import * as productActions from './../products/productions-actions'
@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  productList : Product[] = []
  constructor(private store:Store<AppState>) { }
  
  ngOnInit(): void {
    this.getAddedProducts()
  }

  getAddedProducts(){
    let totalPrice
    this.store.select('products').subscribe(productList=>{
      this.productList = Object.keys(productList.addedProducts).map(productId=>{
        totalPrice = productList.addedProducts[productId].quantity * productList.addedProducts[productId].price
        return { ...productList.addedProducts[productId],totalPrice}
      })
    })
  }

  closeModel(){
    (<HTMLElement>document.querySelector('.modal-backdrop')).style.display = 'none';
  }

  increaseQuantity(product:Product){
     this.store.dispatch(new productActions.AddCartQuantity(product))
  }

  decreaseQuantity(product:Product){
    this.store.dispatch(new productActions.RemoveCartQuantity(product))
  }

}
