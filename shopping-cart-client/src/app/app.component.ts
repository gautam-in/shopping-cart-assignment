import { Component } from '@angular/core';
import { CartService } from './services/cart-services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sabka-bazaar-app';
  showModal: boolean;
  constructor(
    
    private cartService: CartService
  ) {
    //AppComponent.isBrowser.next(isPlatformBrowser(platformId));
  }
  ngOnInit(): void {
    this.cartService.showCart.subscribe((data) => {
      this.showModal = data;
    });
  }
}
