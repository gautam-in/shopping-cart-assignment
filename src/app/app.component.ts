import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shopping-cart';
  productsInCart = [];
  constructor(private http: HttpClient) {
    this.http
      .get(environment.server + '/banners', {})
      .subscribe((e) => console.log(e));
    this.http
      .get(environment.server + '/categories', {})
      .subscribe((e) => console.log(e));
    this.http
      .get(environment.server + '/products', {})
      .subscribe((e) => console.log(e));
    this.http
      .post(environment.server + '/addToCart', null)
      .subscribe((e) => console.log(e));
  }

  openCart() {}
}
