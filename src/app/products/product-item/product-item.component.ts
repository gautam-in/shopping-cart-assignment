import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { IProduct } from '../models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.sass'],
})
export class ProductItemComponent implements OnInit {
  @Input() product!: IProduct;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart(item: IProduct) {
    this.cartService.addToCart(item);
  }
}
