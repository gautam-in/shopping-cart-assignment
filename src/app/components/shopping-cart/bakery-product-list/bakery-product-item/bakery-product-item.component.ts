import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-bakery-product-item',
  templateUrl: './bakery-product-item.component.html',
  styleUrls: ['./bakery-product-item.component.css']
})
export class BakeryProductItemComponent implements OnInit {

  @Input() bakeryproductItem: Product

  constructor() { }

  ngOnInit(): void {
  }

}
