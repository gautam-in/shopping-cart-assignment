import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CartItemsService } from 'src/app/services/cart-items.service';
import { ProductsService } from 'src/app/services/product.service';
import { Product } from '../../interfaces/product';
import { Category } from './../../interfaces/category';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss'],
})
export class ProductListingComponent implements OnInit, OnDestroy {
  options: FormGroup = new FormGroup({});
  allCategories: Category[] = [];
  allProducts: Product[] = [];
  selectedCategory: Category[] = [];

  productSubscription = new Subscription();
  selected = false;

  constructor(
    private fetchProducts: ProductsService,
    fb: FormBuilder,
    private cartItem: CartItemsService
  ) {
    // fix sidenav below the header
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0,
    });
  }

  ngOnInit(): void {
    this.getAllCategories();
    this.getAllProducts();
  }

  getAllCategories(): void {
    this.fetchProducts.getCategories().subscribe((res) => {
      if (res) {
        this.allCategories.push(...res);
      }
    });
  }

  getAllProducts(): void {
    this.productSubscription = this.fetchProducts
      .getProducts()
      .subscribe((res) => {
        if (res) {
          this.allProducts.push(...res);
        }
      });
  }

  getSelectedProducts(categoryId: string): void {
    this.allProducts = [];

    this.fetchProducts.selectedCategoryProducts(categoryId).subscribe((res) => {
      if (res) {
        this.allProducts.push(...res);
      }
    });
  }

  buyProduct(products: Product): void {
    // products['count'] = 1;
    this.cartItem.addProduct(products);
  }

  ngOnDestroy(): void {
    this.productSubscription.unsubscribe();
  }
}
