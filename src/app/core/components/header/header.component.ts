import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICartItem } from 'src/app/shared/models/cart-item.model';
import { SessionStorageService } from 'src/app/storage/session-storage.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private store: Store<{ cartList: ICartItem[] }>,
    private sessionStorage: SessionStorageService
  ) {}
  cartItem = 0;
  showCart = false;
  user: any;
  @ViewChild('cartContainer', { read: ViewContainerRef })
  cartContainer!: ViewContainerRef;
  ngOnInit(): void {
    this.store.select('cartList').subscribe((val) => {
      this.cartItem = val.length;
    });
    this.sessionStorage.currentUser.subscribe((user) => {
      this.user = user;
    });
  }

  closeCart() {
    this.showCart = false;
  }

  openDialog() {
    this.showCart = true;
  }

  logout() {
    this.sessionStorage.logout();
  }
}
