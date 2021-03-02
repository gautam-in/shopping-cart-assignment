import { CartItem } from '../../cart-items.interface';
import { AddToCartService } from '../../services/add-to-cart.service';
import { Component, OnInit } from '@angular/core';
import { ProductsListDTO } from 'src/app/products/models/products-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss']
})
export class MycartComponent implements OnInit {

  constructor(private readonly addToCartService: AddToCartService,
              private readonly router: Router) { }
  
  listofProductsInCart: CartItem[] = [];
  totalProductsPrice: number = 0; 

  ngOnInit(): void {
   this.addToCartService.productsInCart$.subscribe(data => {
      this.listofProductsInCart = [...data];
      this.totalProductsPrice = this.addToCartService.getTotalPriceToCheckout();
   });

  }


  addProduct(product: CartItem) {
    this.addToCartService.addProductsInCart(product);
  }

  removeProduct(product: CartItem) {
    this.addToCartService.removeProductsFromCart(product);
  }  

  goToCheckoutPage() {
    this.router.navigate(['/checkout']);
  }

  goToHomePage() {
    this.router.navigate(['/home']);
  }

}
