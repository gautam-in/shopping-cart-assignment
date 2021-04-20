import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-empty-cart-modal',
  templateUrl: './empty-cart-modal.component.html',
  styleUrls: ['./empty-cart-modal.component.scss']
})
export class EmptyCartModalComponent implements OnInit {

  constructor(private _route: Router, public modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  startShopping() {
    this._route.navigate(['app/home']);
    this.modal.dismiss('Cross click');
  }

  resetCart() {
    this._route.navigate(['app/home']);
    this.modal.dismiss('Cross click');
  }

}
