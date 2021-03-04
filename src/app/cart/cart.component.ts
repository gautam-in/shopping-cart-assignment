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
    const productPosition = this.groceryCart.indexOf(product);
    if (productPosition != -1) {
      this.groceryCart.forEach(prod => {
        if (prod.id === product.id) {
          prod.count -= 1;
        }
        if (prod.count === 0) {
          this.groceryCart.splice(productPosition, 1);
        }
      })
    }
    this._cartService.subject$.next(this.groceryCart);
  }

  addProductQuantity(product) {
    let newCart = [];
    let finalCart = [];

    this.groceryCart.forEach((prod, i) => {
      if (prod.id === product.id) {
        ++prod.count;
      }
      newCart.push(prod);
    });
    finalCart = newCart.filter((val, i) => newCart.indexOf(val) === i);
    this._cartService.subject$.next(finalCart);
  }

  totalAmount() {
    let total = 0;
    for (const item of this.groceryCart) {
      const productUnit = item.count;
      if (item.price) {
        total += item.price * productUnit;
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
