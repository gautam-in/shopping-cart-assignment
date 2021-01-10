import { Component, OnInit, Input, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cart-btn',
  templateUrl: './cart-btn.component.html',
  styleUrls: ['./cart-btn.component.scss']
})
export class CartBtnComponent implements OnInit {
  @Input('cartCount') cartCount: number;
  @Output('toggleCart') toggleCartBtn: EventEmitter <any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  toggleCart(){
    this.toggleCartBtn.emit();

  }
}
