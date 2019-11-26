import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public showMenu: boolean=false;
  constructor() { }
  ngOnInit() {
    this.showMenu;
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
    cart.style.visibility = "hidden";
    overlayCover.style.display="none";
  }


  onMenuClick(){
    document.getElementById('mini-menu-navigation').classList.toggle("show");
  }
}
