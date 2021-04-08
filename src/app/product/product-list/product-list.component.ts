import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
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
  
  constructor(private _productService: ProductService ,
   private _http : HttpClient) {}

  ngOnInit(): void {
  }

  
}
