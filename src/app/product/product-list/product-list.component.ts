import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  category: string;
  productPerRow : any =[];
  @Input() filterCategory;
  
  constructor(private _cartService: CartService ,
   private _http : HttpClient) {}

  ngOnInit(): void {
  }

  buyProduct(product: any){
    this._cartService.addProductToCart(product)
   }
}
