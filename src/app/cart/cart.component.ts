import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  NgbActiveModal
} from '@ng-bootstrap/ng-bootstrap';

export interface ICart {
  productId: string;
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
  @Output() updateCartItem = new EventEmitter();
  @Input() cartItems: ICart[] = [];
  constructor(public activeModal: NgbActiveModal) {}
  ngOnInit(): void {}
  addItemQty(index: number){
    this.cartItems[index].qty = this.cartItems[index].qty + 1
    this.updateCartItem.emit(this.cartItems);
  }
  removeItemQty(index: number){
    if(this.cartItems[index].qty > 1){
      this.cartItems[index].qty =  this.cartItems[index].qty - 1
    } else {
      this.cartItems.splice(index, 1)
    }
    this.updateCartItem.emit(this.cartItems);
  }
}
