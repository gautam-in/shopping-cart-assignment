import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  toggleCart(){
    let cart = document.getElementById("js-cart");
    if(cart.style.visibility == 'hidden' || cart.style.visibility == ''){
      cart.style.visibility = "visible";
    }else{
      cart.style.visibility = "hidden";
    }
    
  }

  closeCart(){
    let cart = document.getElementById("js-cart");
    cart.style.visibility = "hidden";
  }

}
