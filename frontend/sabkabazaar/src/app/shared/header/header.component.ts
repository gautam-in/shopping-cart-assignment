import { Component, OnInit } from '@angular/core';
import { GeneralApiService } from 'src/app/services/general-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  productCount = 0;
  constructor(private generalApiService: GeneralApiService){}

  ngOnInit(): void {
    this.generalApiService.selectedProducts.subscribe(res =>{
      this.productCount = res.length;
    })
  }

  showCart() {
    // this.openCart.emit();
  }
}
