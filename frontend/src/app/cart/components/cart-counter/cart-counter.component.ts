import { Observable } from 'rxjs';
import { AddToCartService } from './../../services/add-to-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-counter',
  templateUrl: './cart-counter.component.html',
  styleUrls: ['./cart-counter.component.scss']
})
export class CartCounterComponent implements OnInit {

  productCountInCart: number = 0;
  constructor(readonly addToCartService: AddToCartService) { }

  ngOnInit(): void {
    this.addToCartService.numberOfproductsInCart$.subscribe(data => {
      this.productCountInCart = data.length;
    });
  }

}
