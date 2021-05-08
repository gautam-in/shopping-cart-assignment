import { Component, OnInit } from '@angular/core';
import { ShareServiceService } from 'src/app/service/share-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

   cartItem  = [];
   totalItem : number = 0;
   totalPrice : number = 0;

  constructor( private _shareService : ShareServiceService) { }

  ngOnInit(): void {
    this.cartItem = JSON.parse(atob(localStorage.getItem('cartItem')));
    this.calculateTotal();
    this._shareService.getCartValue().subscribe((res:any) => {
      //console.log("test");
      this.cartItem = res;
     this.calculateTotal();
      //console.log(this.totalItem);
    })

    this._shareService.updateFooterStatus(false);

  }

  calculateTotal(){
    this.totalItem = this.cartItem.reduce(function (prev, cur) {
      return prev  + cur.quantity;
    }, 0);

    this.totalPrice = this.cartItem.reduce(function(prev , cur){
      return prev + cur.quantity * cur.price
    }, 0)
  }



  addItem(item){
    this._shareService.addCart(item);
  }

  removeItem(item){
    this._shareService.removeCart(item);
  }

  ngOnDestroy(){
    this._shareService.updateFooterStatus(true);
  }

}
