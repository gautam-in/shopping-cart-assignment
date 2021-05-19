import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/modules/shared/Interface/product';
import { HttpService } from 'src/app/modules/shared/service/http.service';
import { ShareService } from 'src/app/modules/shared/service/share.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productItems: Product[] = [];
  keyName: string;
  allProduct: Product[] = [];

  @Input() categoryId: string;

  constructor(
    private _httpService: HttpService,
    private _shareService: ShareService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.getProducts();
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this._httpService.getProductService().subscribe(
      (res: Product[]) => {
        console.log(res);
        this.allProduct = res;
        this.filterItems(this.categoryId);
      },
      (err) => {
        console.error('error in product page');
      }
    );
  }

  filterItems(categoryId) {
    if (categoryId == null || categoryId == undefined || categoryId == '') {
      this.productItems = this.allProduct;
    } else {
      this.productItems = this.allProduct.filter((res) => {
        return res.category == categoryId;
      });
      this.categoryId = categoryId;
    }
  }

  addItem(item: object) {
    this._httpService.addProductService(item['id']).subscribe((res: Object) => {
      if (res['response'] === 'Success') {
        this._shareService.addCart(item);
      }
    });
  }
}
