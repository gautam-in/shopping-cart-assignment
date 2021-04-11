import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input('product') product: Product = new Product();

  @Output('addToCart') addToCart = new EventEmitter<Product>();
  @Output('removeFromCart') removeFromCart = new EventEmitter<Product>();

  constructor() {}

  ngOnInit(): void {}
}
