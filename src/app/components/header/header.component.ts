import {Component, OnInit} from '@angular/core';

import {SharedService} from '../../services/shared/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartQuantity = 0;

  constructor(private sharedService: SharedService) {
  }

  ngOnInit(): void {
    this.sharedService.cart.subscribe(cart => this.cartQuantity = cart.length);
  }

}
