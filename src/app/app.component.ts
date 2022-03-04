import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './cart/cart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cartComponentRef: any
  @ViewChild('cartContainerRef', {static: true, read: ViewContainerRef}) cartContainerRef: ViewContainerRef;
  title = 'apna-bazar';
  noOfCartItems: number = 0;
  constructor( private modalService: NgbModal, private config: NgbModalConfig){

  }
  openModal() {
    this.config.size = 'lg';
    this.config.modalDialogClass = "modal-fullscreen-sm-down"
    const modalRef = this.modalService.open(CartComponent, this.config);
    // modalRef.dismiss = (result) => {
    //   console.log("Modal dismissed");
    // };
  }
}
