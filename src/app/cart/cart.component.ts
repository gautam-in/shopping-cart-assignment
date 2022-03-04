import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {
  NgbActiveModal
} from '@ng-bootstrap/ng-bootstrap';

export interface ICart {
  name: string;
  qty: number;
  price: number;
  imgUrl: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  @ViewChild('cartModalRef') cartModalRef: any;
  cartItems: ICart[] = [
    // {
    //   name: 'Close Up Ever Fresh Red Hot Gel Toothpaste, 150 gm',
    //   imgUrl: '/static/images/products/beauty-hygiene/closeup.jpg',
    //   price: 82,
    //   qty: 5,
    // },
  ];
  constructor(public activeModal: NgbActiveModal) {}
  ngOnInit(): void {}
  addItemQty(index: number){
    this.cartItems[index].qty = this.cartItems[index].qty + 1
  }
  removeItemQty(index: number){
    if(this.cartItems[index].qty > 0){
      this.cartItems[index].qty =  this.cartItems[index].qty - 1
    } else {
      this.cartItems.splice(index, 1)
    }
  }
}
