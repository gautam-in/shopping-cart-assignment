import { Component, OnInit } from '@angular/core';
import { CartService } from './../../../shared/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public showMenu: boolean=false;
  public cartCount :number;
  constructor(private cartService: CartService) { }
  ngOnInit() {
    this.showMenu;
    this.cartService.cartCount.subscribe(cart=>{
      this.cartCount = cart;
    });
    
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
  closeCart(){
    let cart = document.getElementById("js-cart");
    let overlayCover = document.getElementById("cover");
    overlayCover.style.display="none";
  }



  onMenuClick(){
    document.getElementById('mini-menu-navigation').classList.toggle("show");
  }
}
