import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-empty-cart',
  templateUrl: './empty-cart.component.html',
  styleUrls: ['./empty-cart.component.scss'],
})
export class EmptyCartComponent implements OnInit {
  constructor(private _route: Router,
    public modal: NgbActiveModal) {}

  ngOnInit(): void {}

  startShopping() {
    this._route.navigate(['app/home']);
    this.modal.dismiss('Cross click')
  }

  resetCart() {}
}
