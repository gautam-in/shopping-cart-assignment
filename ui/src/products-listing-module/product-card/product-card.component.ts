import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/Shared/models/Product';
import { CartService } from 'src/Shared/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent implements OnInit {

  constructor(private cartService: CartService) { }
  @Input() product: Product = {
    name: '',
    imageURL: '',
    description: '',
    price: 0,
    stock: 0,
    category: '',
    sku: '',
    id: ''
  };
  ngOnInit(): void {
  }
  addItemToCart(id: string, count: number) {
    this.cartService.addItemToCart(id, count, this.product);
  }
}
