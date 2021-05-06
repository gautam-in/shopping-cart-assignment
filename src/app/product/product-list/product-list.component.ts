import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AppService } from 'src/app/shared/services/app.service';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { IProduct } from 'src/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];
  totalProducts: IProduct[] = [];
  categoryId : string

  constructor(
    private _cartService: CartService,
    private _appService: AppService,
    private _activatedroute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this._activatedroute.params.subscribe((params: Params) => {
      this.categoryId = params['id'];
      this.fetchProducts();
    });
  }

  fetchProducts() : any {
    this._appService.getProducts().subscribe((data : IProduct[]) => {
      if(this.categoryId){
        this.getFilteredList(data)
      }else{
        this.products = data;
      }
    });
  }

  getFilteredList(products: IProduct[]) {
    let prod = [];
    if (products.length > 0) {
      products.forEach((product) => {
        if (product.category === this.categoryId) {
          prod.push(product);
        }
      });
      this.products = prod;
    }
  }


  buyProduct(product: IProduct) {
    this._cartService.addProductToCart(product);
    this._cartService.getTotalAmount(product);
  }

}
