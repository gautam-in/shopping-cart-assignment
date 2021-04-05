import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: any = [];
  categories: any = [];
  productPerRow: any = [];

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    this.fetchCategories();
    this.fetchProduct()

  }

  fetchCategories() {
    this._http.get('server/categories/index.get.json').subscribe
      (data => {
        this.categories = data;
      })
  }

  fetchProduct() {
    this._http.get('server/products/index.get.json').subscribe
      (data => {
        this.product = data;
        this.buildProductArr(this.product)
      })
  }

  buildProductArr(product: any) {
    for (var i = 0; i < product.length; i += 4) {
      var row = [];
      for (var x = 0; x < 4; x++) {
        var value = product[i + x];
        if (!value) {
          break;
        }
        row.push(value);
      }
      this.productPerRow.push(row);
    }
    console.log(this.productPerRow);
  }

  getProductByCategory(category: any) {
    let prod: any =[];
    prod=this.product
    this.productPerRow = []
    let productId = this.categories.find(x => x.name == category).id
    prod = prod.filter(y => y.category == productId)
    this.buildProductArr(prod)
    console.log("product per category =============", this.productPerRow)
  }
}
