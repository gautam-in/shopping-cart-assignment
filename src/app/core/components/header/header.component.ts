import { DataService } from '../../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/model/product.model';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  groceryCart: IProduct[] = [];
  isLoggedIn: boolean;
  loggedInUserName: string;

  constructor(
    private cartService: CartService,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getLoggedInInfo();
    this.cartService.cartItems$.subscribe((data: IProduct[]) => {
      this.groceryCart = data;
    });
  }

  getLoggedInInfo(): void {
    this.dataService.isLoggedIn$.subscribe(response => {
      this.isLoggedIn = response.isLoggedIn;
      this.loggedInUserName = response.userName;
    });
  }

  loggedOut(): void {
    alert('You have successfully logged out');
    this.isLoggedIn = false;
    this.router.navigate(['auth/signin']);
  }
}
