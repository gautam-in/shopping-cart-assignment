import { Component, Input, OnInit } from '@angular/core';
import { Products } from '../../models/Products';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: Products;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addItemToCart(id: string) {
    this.cartService.addItemToCart(id);
  }
}
