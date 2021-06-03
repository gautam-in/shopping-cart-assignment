import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/Shared/models/Products';
import { CartService } from 'src/Shared/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent implements OnInit {

  constructor(private cartService:CartService) { }
  @Input() product: Products = {id:'0'};
  @Input() isDesktop: boolean = false;
  ngOnInit(): void {
  }
  addItemToCart(id: string) {
     this.cartService.addItemToCart(id);
  }
}
