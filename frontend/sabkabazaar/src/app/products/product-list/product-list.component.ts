import { Component, OnInit } from '@angular/core';
import { GeneralApiService } from 'src/app/services/general-api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {
  productList: Array<any> = [];
  productCart: Array<any> = [];
  selectedProductCategory: any;

  constructor(private generalApiService: GeneralApiService) { }

  ngOnInit(): void {
    this.generalApiService.selectedProducts.subscribe(res => {
      this.productCart = res;
    })

    this.generalApiService.selectedProductCategory.subscribe(res => {
      if (res) {
        this.selectedProductCategory = res;
      }
      this.getProducts();
    })
  }

  checkProduct(product: any) {
    if (this.productCart.findIndex(p => p.id === product.id) === -1) {
      this.productCart.push({ ...product, quantity: 1 });
    }
    this.generalApiService.selectedProducts.next(this.productCart)
  }

  getProducts() {
    this.generalApiService.getProducts().subscribe(res => {
      if (this.selectedProductCategory) {
        this.productList = res.filter((p: any) => p.category == this.selectedProductCategory.id);
      } else {
        this.productList = res;
      }
    });
  }

}
