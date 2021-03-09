import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  noOfItems: number;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCartItem.subscribe((data) => {
      this.noOfItems = data.reduce(
        (previousVal, currentVal) => previousVal + currentVal.count,
        0
      );
    });
  }

  onClickCart() {
    this.cartService.show();
  }
}
