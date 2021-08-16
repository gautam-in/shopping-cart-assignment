import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SibService } from '../sib.service';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit {
  

  constructor(private service: SibService) { 
    this.service.cartSubject.subscribe((data)=>{
      this.overlayCount = data;
    })
  }
  
  ngOnInit(): void {
    this.cartItemFun();
    this.cartDetails(); 
    this.cartTotal();
  }

  overlayCount: any = 0;

  cartItemFun(){
    if(localStorage.getItem('localCart')!= null){
      var cartCount = JSON.parse(localStorage.getItem('localCart'));
      this.overlayCount = cartCount.length
    }
  }
  getCartDetails:any = [];
  cartDetails(){
    if(localStorage.getItem('localCart')){
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart'));
      // console.log('cart:'+this.getCartDetails )
    }
  }

  onClose(){
    this.service.closeOverlay();
}

 showLog = false;
  countPlus(prodId, count){
    // this.showLog = true;
    //return this.count = this.count + 1;  
    for(let i=0; i<this.getCartDetails.length; i++){
        if(this.getCartDetails[i].id === prodId){
          if(this.getCartDetails[i].qty < 5)
          this.getCartDetails[i].qty = count + 1
        }
    }
    localStorage.setItem('localCart', JSON.stringify( this.getCartDetails));   
    this.cartTotal();
}

  countMinus(prodId, count){
  for(let i=0; i<this.getCartDetails.length; i++){
    if(this.getCartDetails[i].id === prodId){
      if(this.getCartDetails[i].qty > 0){
      this.getCartDetails[i].qty = count - 1
    }
  }
}
localStorage.setItem('localCart', JSON.stringify( this.getCartDetails)); 
this.cartTotal(); 
}

total:number = 0;

cartTotal(){
  if(localStorage.getItem('localCart')){
    this.getCartDetails = JSON.parse(localStorage.getItem('localCart'))
    this.total = this.getCartDetails.reduce(function(acc,val){
      return acc + (val.price * val.qty);

    }, 0)
  }
}


}
