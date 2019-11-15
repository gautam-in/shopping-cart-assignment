import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Output() cartClosed= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  closeCart(){
    this.cartClosed.emit();
  }

}
