import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  // productsLength$: Observable<number> = of(0);
  // @Output() openCart = new EventEmitter<void>();

  // constructor(readonly dataservice: DataService) {
  //   this.productsLength$ = this.dataservice.getselectedProdustsLength();
  // }

  ngOnInit(): void {
  }

  showCart() {
    // this.openCart.emit();
  }
}
