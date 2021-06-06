import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-product-cart-modal',
  templateUrl: './product-cart-modal.component.html',
  styleUrls: ['./product-cart-modal.component.scss'],
})
export class ProductCartModalComponent implements OnInit {
  constructor() {}
  cartItems: any[] = [];

  ngOnInit(): void {
    this.cartItems = [
      {
        category: '5b6899953d1a866534f516e2',
        description:
          'Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.',
        id: '5b6c6a7f01a7c38429530883',
        imageURL: '/static/images/products/fruit-n-veg/kiwi-green.jpg',
        name: 'Fresho Kiwi - Green, 3 pcs',
        price: 87,
        sku: 'fnw-kiwi-3',
        stock: 50,
      },
    ];
  }

  increment(item: any): void {
    // item.count++;
    // item.totalPrice = item.price * item.count;
    //this.getCartItems.incrementCartItem(item);
  }

  decrement(item: any): void {
    // item.count--;
    // item.totalPrice = item.price * item.count;
  }
}
