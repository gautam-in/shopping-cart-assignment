import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { InMemoryDataService } from 'src/app/services/in-memory-data.service';




@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  active: boolean;
  cartListData: any;
  totalCartCount = 0;
  totalCheckOutAmount = 0;
  @Input() showHeader: boolean;
  @Output() checkOutItems = new EventEmitter();
  constructor(private inMemoryDataService: InMemoryDataService, private router: Router) {
    this.active = true;
   }
  ngOnDestroy(): void {
    this.active = false;
  }

  ngOnInit(): void {
    this.cartListData = this.inMemoryDataService.cartlistData;
    if (this.cartListData){
      this.totalCartCount = this.cartListData.cartCount;
      this.updateTotalCheckoutPrice();
    }
  }
  increment(cartData, index){
    if (this.cartListData){
      if (cartData.count < cartData.stock){
        cartData.count += 1;
        this.cartListData.cartCount += 1;
        this.inMemoryDataService.updateCartCount.next(this.cartListData.cartCount);
        this.updateTotalCheckoutPrice();
      }
    }
  }
  decrement(cartData, index){
    if (this.cartListData){
      cartData.count -= 1;
      this.cartListData.cartCount -= 1;
      this.inMemoryDataService.updateCartCount.next(this.cartListData.cartCount);
      if (cartData.count === 0){
        this.cartListData.productArray = this.cartListData.productArray.filter((item) => item.count > 0);
        this.updateTotalCheckoutPrice();
      }else{
        this.updateTotalCheckoutPrice();
      }
    }
  }

  updateTotalCheckoutPrice(){
      this.totalCheckOutAmount = 0;
      this.cartListData.productArray.forEach(element => {
      this.totalCheckOutAmount += (element.count) * (element.price);
    });
  }
  startShopping(){
    if (screen.width > 1023){
      this.checkOutItems.emit('close');
    }else{
      this.router.navigate(['./productLists/productsPage']);
    }
  }
  checkOut(){
    if (screen.width > 1023){
      this.checkOutItems.emit('close');
    }else{
      this.router.navigate(['./productLists/productsPage']);
    }
  }
}
