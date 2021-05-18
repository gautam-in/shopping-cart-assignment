import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modules/shared/Interface/product';
import { ShareService } from 'src/app/modules/shared/service/share.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

   cartItem  :Product[] = []
   totalItem : number = 0;
   totalPrice : number = 0;

  constructor( private _shareService : ShareService) { }

  ngOnInit(): void {
    this.cartItem = JSON.parse(localStorage.getItem('cartItem'));
    if(this.cartItem) {
    this.calculateTotal();
    }
    this._shareService.getCartValue().subscribe((res:Product[]) => {
      this.cartItem = res;
     this.calculateTotal();
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
