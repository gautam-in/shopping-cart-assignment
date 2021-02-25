import { CartItem } from './../../../cart/cart-items.interface';
import { AddToCartService } from './../../../cart/services/add-to-cart.service';
import { ProductCategoryDTO } from './../../../home/models/product-category-dto';
import { ProductsListDTO } from './../../models/products-list';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() products: CartItem[] = [];

  constructor(private readonly addToCartService: AddToCartService) { }

  ngOnInit(): void {
  }

  addProductToCart(product: CartItem) {
    this.addToCartService.addProductsInCart(product);
  }
}
