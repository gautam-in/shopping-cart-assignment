import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Product } from '../interfaces';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.sass']
})
export class ProductCartComponent implements OnInit {
  @Output() closeCart = new EventEmitter<void>();

  products: Product[] = [];
  readonly destroyed = new ReplaySubject(1);

  constructor(readonly dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.selectedProducts$.pipe(takeUntil(this.destroyed))
      .subscribe(products => {
        this.products = products;
      });
  }

  decreaseItem(product: Product) {
    if(product.count && product.count > 1) {
      product.count = product.count - 1;
    }
  }

  increaseItem(product: Product) {
    if(product.count) {
      product.count = product.count + 1;
    } else {
      product.count = 1;
    }
  }

  removeItem(product: Product) {
    this.dataService.removeProduct(product);
  }

}
