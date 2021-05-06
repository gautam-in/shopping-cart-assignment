import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareServiceService {

cartValueCount = new Subject();
  
  cartValue  = new Subject();
  footerVisibility = new BehaviorSubject(true);
  constructor() { }


  addCart(item: any){

    let itemQuantity = [];
    
    if (localStorage.getItem('cartItem')) {
      itemQuantity = JSON.parse(localStorage.getItem('cartItem'));
    }
   
    if (itemQuantity.length === 0) {
      item.quantity = 1;
      itemQuantity.push(item);
    }
   
    else {
      const itemIndex = itemQuantity.findIndex((itemQuantity) => itemQuantity.id === item.id);
  
      if (itemIndex === -1) {
        item.quantity = 1;
        itemQuantity.push(item);
      }
     
      else {
        itemQuantity[itemIndex].quantity = itemQuantity[itemIndex].quantity + 1;
      }
    }
    localStorage.setItem('cartItem', JSON.stringify(itemQuantity));
      this.updateValue(itemQuantity);
   
  }

  removeCart(item){

    let itemQuantity = [];
   
    if (localStorage.getItem('cartItem')) {
      itemQuantity = JSON.parse(localStorage.getItem('cartItem'));
    }
    
    const itemIndex = itemQuantity.findIndex((itemQuantity) => itemQuantity.id === item.id);
   if(itemQuantity[itemIndex].quantity > 1){
    itemQuantity[itemIndex].quantity = itemQuantity[itemIndex].quantity - 1;
     localStorage.setItem('cartItem', JSON.stringify(itemQuantity));
    
   } else{
    itemQuantity = itemQuantity.filter(itemQuantity => itemQuantity.id !== item.id );
     localStorage.setItem('cartItem', JSON.stringify(itemQuantity));
  
   }

   this.updateValue(itemQuantity);

  }


  updateValue(itemQuantity){
 

    this.cartValue.next(itemQuantity);

    this.cartValueCount.next(itemQuantity);
  }

  getCartValue() {
    return this.cartValue.asObservable();
  }

  getCartCount(){
    return this.cartValueCount.asObservable();
  }

  updateFooterStatus(status){
    this.footerVisibility.next(status);
  }

  getfooterStatus() {
     
     return this.footerVisibility.asObservable();
  }
}
