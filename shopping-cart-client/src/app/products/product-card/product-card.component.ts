import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Products } from '../../models/Products';
import { CartService } from '../../services/cart-services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: Products;
  @Input() isDesktop: boolean;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addItemToCart(id: string) {
    this.cartService.addItemToCart(id);
  }
}
