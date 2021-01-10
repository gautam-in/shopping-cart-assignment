import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';
import { CartService } from './../../../shared/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public showMenu: boolean;
  public cartCount :number;
  showCart :boolean;
  constructor(private cartService: CartService, private el: ElementRef, private renderer : Renderer2) { }
   
  ngOnInit() {
    this.showMenu;
    this.cartService.cartCount.subscribe(cart=>{
      this.cartCount = cart;
    });
  }
  toggleCart(){
    if(!this.showCart){
      this.showCart = true;
    }else{
      this.showCart = false;
    }
    this.toggleOverLay();
  }
  closeCart(){
    this.showCart = false;
    this.toggleOverLay();
  }

  toggleOverLay(){
    if(this.showCart){
      document.getElementById('js-overlay').classList.add('cover-overlay');
      document.body.style.overflow = 'hidden';
    }else{
      document.getElementById('js-overlay').classList.remove('cover-overlay');
      document.body.style.overflow = 'auto';
    }
  }
  getNotofiedFromChild(val:boolean){
    this.showCart = val;
    this.toggleOverLay();
  }
  onMenuClick(){
    document.getElementById('mini-menu-navigation').classList.toggle("show");
  }

}
