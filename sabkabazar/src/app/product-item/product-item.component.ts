import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.sass'],
})
export class ProductItemComponent implements OnInit {
  @Input() product!: IProduct;
  constructor() {}

  ngOnInit(): void {}
}
