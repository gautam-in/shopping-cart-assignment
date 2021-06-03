import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICartItem } from 'src/app/models/cart-item.model';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  constructor(private store: Store<{ cartList: ICartItem[] }>) {}
  cartItem = 0;
  showCart = false;
  @ViewChild('cartContainer', { read: ViewContainerRef })
  cartContainer!: ViewContainerRef;
  ngOnInit(): void {
    this.store.select('cartList').subscribe((val) => {
      this.cartItem = val.length;
    });
  }

  closeCart() {
    this.showCart = false;
  }

  openDialog() {
    this.showCart = true;
  }
}
