import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'cart-btn',
  templateUrl: './cart-btn.component.html',
  styleUrls: ['./cart-btn.component.scss']
})
export class CartBtnComponent implements OnInit {
  @Input('cartCount') cartCount: number;
  constructor() { }

  ngOnInit() {
  }

  toggleCart(){
    let cart = document.getElementById("js-cart");
    let overlayCover = document.getElementById("cover");
    if(cart.style.visibility == 'hidden' || cart.style.visibility == ''){
      overlayCover.style.display="block";
      cart.style.visibility = "visible";
    }else{
      cart.style.visibility = "hidden";
      overlayCover.style.display="none";
    }
  }
}
