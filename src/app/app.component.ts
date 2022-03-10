import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './cart/cart.component';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cartComponentRef: any
  @ViewChild('cartContainerRef', {static: true, read: ViewContainerRef}) cartContainerRef: ViewContainerRef;
  title = 'sabka-bazar';
  cartItems: any[] = [
    {
      productId: 'default',
      name: 'Close Up Ever Fresh Red Hot Gel Toothpaste, 150 gm',
      imgUrl: '/static/images/products/beauty-hygiene/closeup.jpg',
      price: 82,
      qty: 5,
    }
  ]
  constructor( private modalService: NgbModal, private config: NgbModalConfig, private apiService: ApiService){
    this.apiService.updateCartItems.subscribe((product) => {
      if(product && this.cartItems.length > 0){
        const matchItemIndex = this.cartItems.findIndex(x => x.productId === product.id);
        if(matchItemIndex >= 0){
          this.cartItems[matchItemIndex].qty = this.cartItems[matchItemIndex].qty + 1;
        } else {
          this.addCartItems(product);
        }
      } else {
        this.addCartItems(product);
      }
    })
  }

  addCartItems(product: any){
    const item = {
      productId: product.id,
      name: product.name,
      imgUrl: product.imageURL,
      price: product.price,
      qty: 1,
    }
    this.cartItems.push(item)
  }

  openModal() {
    this.config.size = 'lg';
    this.config.modalDialogClass = "modal-fullscreen-sm-down"
    const modalRef = this.modalService.open(CartComponent, this.config);
    modalRef.componentInstance.cartItems = [...this.cartItems];
    modalRef.componentInstance.updateCartItem.subscribe((cartItems: any) => {
      this.cartItems = [...cartItems];
    })
  }
}
