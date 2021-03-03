import { Component, OnInit } from '@angular/core';
import { CartService } from './Services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sabka-bazaar';
  myCart = [];
  
  constructor(
    private _cartservice: CartService
  ) { }

  ngOnInit() { 
    this._cartservice.itemCount$.subscribe(
      data => this.myCart = data
    );   
  }
 
}
