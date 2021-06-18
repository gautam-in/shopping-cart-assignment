import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private selectedProducts = new BehaviorSubject<Product[]>([]);
  readonly selectedProducts$ = this.selectedProducts.asObservable();

  constructor() { }

  getselectedProdustsLength() {
    return this.selectedProducts$.pipe(map(produsts => produsts.length));
  }

  getSelectedProdusts(): Product[] {
    return this.selectedProducts.getValue();
  }

  setSelectedProducts(product: Product) {
    const products = this.selectedProducts.getValue();
    const selectedProduct = products.findIndex(p => p.id === product.id);

    if(selectedProduct === -1) {
      this.selectedProducts.next([...products, product]);
    }
  }
}
