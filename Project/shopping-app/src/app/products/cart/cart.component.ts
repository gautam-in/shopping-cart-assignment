import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../data-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cartList: any;
  public cartItemDetails: any = [];
  public cartItems: any;
  public multiplier = 1;
  public totalProductPrice: any = 0;
  constructor( public dataService: DataServiceService) { }

  ngOnInit(): void {
    this.dataService.castItems.subscribe((items: any) => {
      this.cartItems = items;
      const list = items.length;
      if ( list === 1 ) {
        this.cartList = list + ' ' + 'Item';
      } else {
        this.cartList = list + ' ' + 'Items';
      }
      this.getCartDetails();
    });
  }

  getCartDetails(): void {
    if ( sessionStorage.getItem('isUserLoggedIn') ) {
      this.dataService.getProductList().subscribe((data: any) => {
        this.cartItemDetails = [];
        data.forEach((item: any) => {
          this.cartItems.forEach((id: any) => {
            if ( item.id === id ) {
              item.quantity = 1;
              this.cartItemDetails.push(item);
            }
          });
        });
        this.getTotalPrice();
      });
    } else {
      alert('please login to proceed');
    }
  }

  decreament(product: any): void {
    product.quantity -= 1;
    this.getTotalPrice();
  }

  increament(product: any): void {
    product.quantity += 1;
    this.getTotalPrice();
  }

  getTotalPrice(): void {
    this.totalProductPrice = 0;
    this.cartItemDetails.forEach((item: any) => {
      this.totalProductPrice += item.quantity * item.price;
    });
  }
}
