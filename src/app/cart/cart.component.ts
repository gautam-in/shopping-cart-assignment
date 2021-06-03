import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass'],
})
export class CartComponent implements OnInit {
  @Output() close = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  closeCart() {
    this.close.emit('');
  }
}
