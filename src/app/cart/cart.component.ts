import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from './../shared/services/cart.service';
import { ICart } from './../models/Icart';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartList:ICart[];
  totalPrice:any;
  @Output() cartClosed= new EventEmitter();
  constructor(private cartService: CartService, private route:Router) { }

  ngOnInit() {
    this.cartService.cartData.subscribe(carts=>{
      this.cartList = carts;
      this.getTotalPrice();
    });
  }

  modifyItems(product:any,action:string,index:number){
    if(action == 'increment'){
      product.count++;
      this.cartService.incrementCount();
    }else{
      console.log(product)
      if(product.count>0){
        product.count--;
        if(product.count == 0){
          this.cartList.splice(index);
        }
        this.cartService.decrementCount();
      }
    }
    this.getTotalPrice();
  }
  closeCart(){
    this.cartClosed.emit();
  }

  getTotalPrice(){
    this.totalPrice = 0 ;
    this.cartList.map(obj=>{
      if(obj.count>0){
        this.totalPrice+= (obj.price * obj.count);
      }  
    });
  }

  exploreShopping(){
    this.closeCart();
    if(this.route.url !== '/product-list'){
      this.route.navigate(['/product-list']);
    }
  }

}
