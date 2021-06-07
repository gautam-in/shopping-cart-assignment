import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { CartItemsService } from 'src/app/services/cart-items.service';
import { ProductsService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit, OnDestroy {
  productSubscription = new Subscription();

  @Input() allProducts: Product[] = [];
  constructor(
    private fetchProducts: ProductsService,
    private cartItem: CartItemsService
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productSubscription = this.fetchProducts
      .getProducts()
      .subscribe((res) => {
        if (res) {
          this.allProducts.push(...res);
        }
      });
  }

  buyProduct(product: Product): void {
    this.cartItem.addProduct(product);
  }

  ngOnDestroy(): void {
    this.productSubscription.unsubscribe();
  }
}
