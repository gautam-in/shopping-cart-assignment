import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss']
})
export class CartModalComponent implements OnInit {

  cartData: any;
  constructor(public bsModalRef: BsModalRef, private router: Router) { }

  ngOnInit(): void {
    console.log("carData>>>",this.cartData);
  }
  closeModal(){
    this.bsModalRef.hide();
    this.router.navigate(['./productLists/productsPage']);
  }
}
