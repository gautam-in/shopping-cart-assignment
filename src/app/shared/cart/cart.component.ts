import { IProduct } from '../../model/product.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

  groceryCart: IProduct[] = [];
  subscription: Subscription;

  constructor(
    private cartService: CartService,
    private router: Router,
    public modal: NgbActiveModal
  ) { }

  ngOnInit(): void {
    this.subscription = this.cartService.cartItems$.subscribe((data: IProduct[]) => {
      this.groceryCart = data;
    });
    this.cartService.totalItemPrice();
  }

  addProductsToCart(product: IProduct): any {
    return this.cartService.addProductsToCart(product);
  }

  removeProductFromCart(product: IProduct): any {
    return this.cartService.removeProductFromCart(product);
  }

  totalAmount(): number {
    return this.cartService.totalAmount();
  }

  totalItemPrice(): number {
    return this.cartService.totalItemPrice();
  }

  resetCart(): void {
    this.cartService.resetCart();
    this.router.navigate(['/home']);
  }

  ngOnDestroy(): void {
    if ( this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
