import { Component } from '@angular/core';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';

import {CartState} from './store/state/cart.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Select(CartState.cartStatus) isCartVisible: Observable<boolean>;
}
