import { Component, OnInit } from '@angular/core';
import { HomeService } from '../shared/services/home.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  showModal: boolean;

  constructor(private cartService: HomeService) {}

  ngOnInit(): void {
    this.cartService.showCart.subscribe((data) => {
      this.showModal = data;
    });
  }

  onClose() {
    // showModal = !showModal;
    this.cartService.hide();
  }
}
