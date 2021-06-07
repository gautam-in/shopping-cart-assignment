import { Component } from '@angular/core';
import { CartService } from 'src/Shared/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'sabka-bazaar-app';
  showModal: boolean = false;
  offline: boolean = false;
  constructor(private cartService: CartService) { }
  ngOnInit(): void {
    this.cartService.showCart.subscribe((data) => {
      this.showModal = data;
    });
  }
}
