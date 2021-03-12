import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { InMemoryDataService } from 'src/app/services/in-memory-data.service';
import { CartModalComponent } from '../cart-modal/cart-modal.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {

  bsModalRef: BsModalRef;
  config: ModalOptions = {
		keyboard: false,
		backdrop: 'static',
    ariaDescribedby: 'my-modal-description',
    ariaLabelledBy: 'my-modal-title'
	};
  @Input() count: number;
  cartCount: number;
  constructor(private inMemoryDataService: InMemoryDataService, private bsModalService: BsModalService) { }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    this.cartCount = this.count;
  }
  openOverlay(){
    const cartData =   this.inMemoryDataService.cartlistData;
    const initialState = {cartData};
    this.bsModalRef = this.bsModalService.show(
			CartModalComponent,
			Object.assign({initialState}, this.config, { class: 'modal-md' })
		);
  }
}
