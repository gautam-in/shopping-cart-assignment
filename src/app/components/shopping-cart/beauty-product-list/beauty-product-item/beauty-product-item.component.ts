import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-beauty-product-item',
  templateUrl: './beauty-product-item.component.html',
  styleUrls: ['./beauty-product-item.component.css']
})
export class BeautyProductItemComponent implements OnInit {

  @Input() beautyproductItem: Product
  constructor() { }

  ngOnInit(): void {
  }

}
