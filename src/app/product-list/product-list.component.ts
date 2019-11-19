import { Component, OnInit } from '@angular/core';
import { ProductListService } from './../services/product-list.service';
import { IProduct } from './../models/IProduct';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public productList:IProduct[];
  constructor(private _productListService: ProductListService) { 
  }

  ngOnInit() {
    this._productListService.getProducts().subscribe((productList) => this.productList = productList);
    
  }

}
