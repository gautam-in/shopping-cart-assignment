import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  groceryCart = [];
  totalPrice: number;

  constructor(
    private _cartService: CartService,
    private router: Router
  ) { }

  ngOnInit() {
    this._cartService.itemCount$.subscribe(data => {
      this.groceryCart = data;
    });
  }

  removeProduct(product) {
    const index: number = this.groceryCart.indexOf(product);
    if (index > -1) {
      this.groceryCart.splice(index, 1);
    }
    this._cartService.subject$.next(this.groceryCart);
  }

  addProduct(product) {
    this._cartService.addProduct(product);
  }

  totalAmount() {
    let total = 0;
    for (const item of this.groceryCart) {
      if (item.price) {
        total += item.price;
        this.totalPrice = total;
      }
    }
    return total;
  }

  resetCart() {
    this.groceryCart = [];
    this._cartService.subject$.next(this.groceryCart);
    this.router.navigate(['/home']);
  }
}
