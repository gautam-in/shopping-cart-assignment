import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  productsLength$: Observable<number> = of(0);
  @Output() openCart = new EventEmitter<void>();

  constructor(readonly dataservice: DataService) {
    this.productsLength$ = this.dataservice.getselectedProdustsLength();
  }

  ngOnInit(): void {
  }

  openProductCart() {
    this.openCart.emit();
  }
}
