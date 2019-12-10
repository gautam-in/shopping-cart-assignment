import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input('imageURL') imageURL:string;
  @Input('title') title:string;
  @Input('count') count:string;
  @Input('price') price:string;
  @Output('modifyItem') addRemoveCartItems: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  updateCartItem(action){
    this.addRemoveCartItems.emit(action);
  }
  

}