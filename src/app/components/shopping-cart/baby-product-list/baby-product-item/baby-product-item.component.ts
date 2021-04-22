import { Component, OnInit, Input } from '@angular/core';

import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-baby-product-item',
  templateUrl: './baby-product-item.component.html',
  styleUrls: ['./baby-product-item.component.css']
})
export class BabyProductItemComponent implements OnInit {

  @Input() babyproductItem: Product

  constructor() { }

  ngOnInit(): void {
  }

}
