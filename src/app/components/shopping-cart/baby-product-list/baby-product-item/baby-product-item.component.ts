import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

import { MessengerService } from 'src/app/services/messenger.service'
import { CartService } from 'src/app/services/cart.service'

@Component({
  selector: 'app-baby-product-item',
  templateUrl: './baby-product-item.component.html',
  styleUrls: ['./baby-product-item.component.css']
})
export class BabyProductItemComponent implements OnInit {

  @Input() babyproductItem: Product

  constructor(
    private msg: MessengerService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  handleAddToCart() {
  //console.log(this.babyproductItem);
    this.cartService.addProductToCart(this.babyproductItem).subscribe(() => {
    this.msg.sendMsg(this.babyproductItem)
    })
  }
}
