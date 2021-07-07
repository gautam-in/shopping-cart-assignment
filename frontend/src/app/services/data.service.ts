import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category, Product } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private selectedProducts = new BehaviorSubject<Product[]>([]);
  readonly selectedProducts$ = this.selectedProducts.asObservable();

  private selectedCategory = new BehaviorSubject<Category|null>(null);
  readonly selectedCategory$ = this.selectedCategory.asObservable();

  constructor() { }

  setSelectedCategory(category: Category) {
    this.selectedCategory.next(category);
  }

  getselectedProdustsLength() {
    return this.selectedProducts$.pipe(map(produsts => produsts.length));
  }

  getSelectedProdusts(): Product[] {
    return this.selectedProducts.getValue();
  }

  removeProduct(product: Product) {
    const products = this.selectedProducts.getValue();
    const filteredProducts = products.filter(p => p.id !== product.id);
    this.selectedProducts.next(filteredProducts);
  }

  setSelectedProducts(product: Product) {
    const products = this.selectedProducts.getValue();
    const selectedProduct = products.findIndex(p => p.id === product.id);

    if(selectedProduct === -1) {
      this.selectedProducts.next([...products, product]);
    }
  }
}
