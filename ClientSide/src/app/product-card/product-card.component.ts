import { Component, Input, OnInit } from '@angular/core';
import { Products } from '../models/Products';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: Products;
  constructor() {}

  ngOnInit(): void {}
}
