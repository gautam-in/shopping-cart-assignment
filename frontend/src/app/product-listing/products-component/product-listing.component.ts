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
export class ProductListingComponent implements OnInit {
  options: FormGroup = new FormGroup({});
  allCategories: Category[] = [];
  allProducts: Product[] = [];
  selectedCategory: Category[] = [];

  selected = false;

  constructor(private fetchProducts: ProductsService, fb: FormBuilder) {
    // fix sidenav below the header
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0,
    });
  }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories(): void {
    this.fetchProducts.getCategories().subscribe((res) => {
      if (res) {
        this.allCategories.push(...res);
      }
    });
  }

  sendSelectedProducts(categoryId: string): void {
    this.allProducts = [];

    this.fetchProducts.selectedCategoryProducts(categoryId).subscribe((res) => {
      if (res) {
        this.allProducts.push(...res);
      }
    });
  }
}
