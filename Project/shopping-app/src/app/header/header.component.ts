import { Component, OnInit, TemplateRef } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public cartList: any = '0 Items';
  public cartItemDetails: any = [];
  public cartItems: any;
  public multiplier = 1;
  public totalProductPrice: any = 0;
  modalRef: BsModalRef | undefined;
  ispopup = false;
  constructor( private dataService: DataServiceService, private router: Router, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.dataService.castItems.subscribe((items: any) => {
      this.cartItems = items;
      const list = items.length;
      if ( items?.length ) {
        if ( list === 1 ) {
          this.cartList = list + ' ' + 'Item';
        }else {
          this.cartList = list + ' ' + 'Items';
        }
      }
    });
  }

  openModal(template: TemplateRef<any>): void {
    this.ispopup = true;
    if ( this.checkUserLoggedIn() ) {
      this.modalRef = this.modalService.show(template);
      this.getCartDetails();
    }
  }

  hideModal(): void {
    this.modalService.hide();
  }

 getCartDetails(): void {
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
        if ( !this.ispopup && this.checkUserLoggedIn()) {
          this.router.navigate(['./products/cart']);
        }
      });
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

  checkUserLoggedIn(): any {
    if ( sessionStorage.getItem('isUserLoggedIn') ) {
      return true;
    } else {
      alert('please login to proceed');
      return false;
    }
  }
}
