import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CartComponent } from 'src/app/cart/cart.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  constructor(private cartService: CartService, public dialog: MatDialog) {}
  count = 0;
  showCart = false;
  @ViewChild('cartContainer', { read: ViewContainerRef })
  cartContainer!: ViewContainerRef;
  ngOnInit(): void {
    this.cartService.getCartItems$().subscribe(() => {
      this.count = this.cartService.getCart().length;
    });
  }

  closeCart() {
    this.showCart = false;
  }

  openDialog() {
    this.showCart = true;
  }
}
