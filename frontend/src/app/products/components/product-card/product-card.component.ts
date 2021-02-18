import { ProductCategoryDTO } from './../../../home/models/product-category-dto';
import { ProductsList } from './../../models/products-list';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() products: ProductsList[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
