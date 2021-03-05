import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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
