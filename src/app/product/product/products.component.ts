import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { IProduct } from 'src/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = [];

  constructor(
    private _activatedroute: ActivatedRoute,
    private _cartService: CartService
  ) {}

  ngOnInit(): void {
    this.fetchProduct(this._activatedroute.snapshot.data['productDetail']);
  }

  fetchProduct(data) {
    if (data.length > 0) {
      this.products = data;
    }
  }

  buyProduct(product: IProduct) {
    this._cartService.addProductToCart(product);
  }
}
