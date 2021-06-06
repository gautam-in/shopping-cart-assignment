import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ProductCartModalComponent } from 'src/app/product-cart-modal/product-cart-modal.component';
import { CartItemsService } from 'src/app/services/cart-items.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private cartSubscription = new Subscription();
  productCount = 0;

  constructor(public dialog: MatDialog, private miniCart: CartItemsService) {}

  ngOnInit(): void {
    this.getProductCount();
  }

  openCartModal(): void {
    this.dialog.open(ProductCartModalComponent, {
      width: '500px',
      height: '550px',
    });
  }

  getProductCount(): void {
    this.cartSubscription = this.miniCart.getCartProduct().subscribe((res) => {
      this.productCount = res.length;
    });
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
  }
}
