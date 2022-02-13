import { Component, OnInit, TemplateRef } from '@angular/core';
import { GeneralApiService } from 'src/app/services/general-api.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  modalRef?: BsModalRef;
  products: Array<any> = [];

  constructor(private generalApiService: GeneralApiService,
    private modalService: BsModalService,
    private router: Router) { }

  ngOnInit(): void {
    this.generalApiService.selectedProducts.subscribe(res => {
      this.products = res;
    })
  }

  showCart(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  closeModal() {
    this.modalRef?.hide();
  }

  startShopping() {
    this.closeModal();
    this.router.navigate(['/products']);
  }
}
