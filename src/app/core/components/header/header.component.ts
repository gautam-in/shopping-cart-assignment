import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICartItem } from 'src/app/shared/models/cart-item.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  cartItem = 0;
  showCart = false;

  constructor(private store: Store<{ cartList: ICartItem[] }>) {}

  ngOnInit(): void {
    this.store.select('cartList').subscribe((cartList) => {
      this.cartItem = cartList.length;
    });
  }

  closeCart() {
    this.showCart = false;
  }

  openCart() {
    this.showCart = true;
  }
}
