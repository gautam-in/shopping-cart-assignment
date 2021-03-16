import { ProductDataService } from '../services/productData.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from 'src/app/model/product.model';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from 'src/app/shared/cart/cart.component';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  groceryCart: IProduct[] = [];
  isLoggedIn: boolean;
  loggedInUserName: string;
  closeResult: string;
  subscription: Subscription;

  constructor(
    private cartService: CartService,
    private productDataService: ProductDataService,
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getLoggedInInfo();
    this.subscription = this.cartService.cartItems$.subscribe((data: IProduct[]) => {
      this.groceryCart = data;
    });
  }

  openCart(): void {
    this.modalService.open(CartComponent, { ariaLabelledBy: 'cartTitle' });
  }

  getLoggedInInfo(): void {
    this.productDataService.isLoggedInSubject.subscribe(response => {
      this.isLoggedIn = response.isLoggedIn;
      this.loggedInUserName = response.userName;
    });
  }

  loggedOut(): void {
    this.isLoggedIn = false;
    this.router.navigate(['auth/signin']);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
