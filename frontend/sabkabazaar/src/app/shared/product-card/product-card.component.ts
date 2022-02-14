import { Component,Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent implements OnInit {
  
  @Input() product: any;
  @Output() addProductInCart = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addProduct(product: any){
    this.addProductInCart.emit(product)
  }
}
