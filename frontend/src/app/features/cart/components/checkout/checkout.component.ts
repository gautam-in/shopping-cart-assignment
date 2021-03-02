import { AddToCartService } from '../../services/add-to-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private readonly addToCartService: AddToCartService) { }

  ngOnInit(): void {
    this.addToCartService.resetCart();
  }

}
