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
    if(cart.style.visibility == 'hidden' || cart.style.visibility == ''){
      cart.style.visibility = "visible";
    }else{
      cart.style.visibility = "hidden";
    }
    this.closeMenu();
  }

  closeCart(){
    let cart = document.getElementById("js-cart");
    cart.style.visibility = "hidden";
  }

  closeMenu(){
    let menu = document.getElementById("mini-menu-navigation");
    menu.style.visibility = "hidden";
  }
  onMenuClick(){
    document.getElementById('mini-menu-navigation').classList.toggle("show");
  }
}
