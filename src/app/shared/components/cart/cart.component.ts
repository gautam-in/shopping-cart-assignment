import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Enter } from 'src/app/core/common/animations/enter.animation';
import { AppState } from 'src/app/models/app-state.model';
import { CartState } from '../../models/cart-state.model';
import {
  DecreaseProductQuantity,
  IncreaseProductQuantity,
  PlaceOrder,
} from '../../store/actions/cart-list.actions';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  animations: [Enter],
  host: { '[@Enter]': '' },
})
export class CartComponent implements OnInit {
  cart$!: Observable<CartState>;
  @Output() close: EventEmitter<any> = new EventEmitter();
  outSideClickedFirstTime = false;
  inside = false;
  @HostListener('click', ['$event'])
  clicked(ev: Event) {
    this.inside = true;
    ev.stopPropagation();
  }
  @HostListener('document:click')
  clickedOut() {
    if (!this.outSideClickedFirstTime) {
      this.outSideClickedFirstTime = true;
    } else {
      this.closeDialog();
    }
    this.inside = false;
  }
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.cart$ = this.store.select('cart');
  }

  closeDialog() {
    this.close.emit(true);
  }

  removeProductFromCart(index: number) {
    this.store.dispatch(new DecreaseProductQuantity(index));
  }

  addProductsToCart(index: number) {
    this.store.dispatch(new IncreaseProductQuantity(index));
  }

  placeOrder() {
    this.store.dispatch(new PlaceOrder());
    this.closeDialog();
  }
}
