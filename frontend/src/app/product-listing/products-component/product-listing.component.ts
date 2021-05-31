import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { FetchProductsService } from 'src/app/services/fetch-products.service';
import { Products } from './../../interfaces/products';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss'],
})
export class ProductListingComponent implements OnInit {
  options: FormGroup = new FormGroup({});
  allCategories: any[] = [];
  allProducts: any[] = [];
  selectedCategory: any[] = [];

  productSubscription = new Subscription();
  selected: boolean = false;

  constructor(private fetchProducts: FetchProductsService, fb: FormBuilder) {
    //fix sidenav below the header
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
    this.fetchProducts.getCategories().subscribe((res: any) => {
      if (res) {
        this.allCategories.push(...res);
        // console.log(this.allCategories);
      } else {
        this.allCategories = [];
      }
    });
  }

  getAllProducts(): void {
    this.productSubscription = this.fetchProducts
      .getProducts()
      .subscribe((res) => {
        if (res) {
          this.allProducts.push(...res);
        } else {
          this.allProducts = [];
        }
      });
  }

  getSelectedProducts(categoryId: string) {
    this.allProducts = [];

    this.fetchProducts
      .selectedCategoryProducts(categoryId)
      .subscribe((res: any) => {
        if (res) {
          this.allProducts.push(...res);
        } else {
          this.allProducts = [];
        }
      });
  }

  buyProduct(products: Products): void {
    this.fetchProducts.addProduct(products);
  }

  ngOnDestroy(): void {
    this.productSubscription.unsubscribe();
  }
}
