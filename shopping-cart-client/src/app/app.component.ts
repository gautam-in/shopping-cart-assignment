import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { CartService } from './services/cart-services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sabka-bazaar-app';
  showModal: boolean;
  offline: boolean;
  static isBrowser = new BehaviorSubject<boolean>(null);

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private cartService: CartService
  ) {
    AppComponent.isBrowser.next(isPlatformBrowser(platformId));
  }
  ngOnInit(): void {
    this.cartService.showCart.subscribe((data) => {
      this.showModal = data;
    });
  }
}
