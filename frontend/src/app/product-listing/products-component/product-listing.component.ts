import { Component, OnInit } from '@angular/core';
import { FetchProductsService } from 'src/app/services/fetch-products.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss'],
})
export class ProductListingComponent implements OnInit {
  allCategories: any[] = [];
  allProducts: any[] = [];
  selectedCategory: any[] = [];

  selected: boolean = false;
  constructor(private fetchProducts: FetchProductsService) {}

  ngOnInit(): void {
    this.getAllCategories();
    this.getAllProducts();
  }

  getAllCategories(): void {
    this.fetchProducts.getCategories().subscribe((res: any) => {
      this.allCategories = res;
      console.log(this.allCategories);
    });
  }

  getAllProducts(): void {
    this.fetchProducts.getProducts().subscribe((res: any) => {
      this.allProducts = res;
      console.log(this.allProducts);
    });
  }

  showProducts(categoryId:any): void {
    console.log(categoryId);
    // this.selected = true;

    // if (this.selected === true) {
    //   this.selectedCategory = this.allProducts.filter(
    //     (product) => product.category === categoryId
    //   );
    // }
  }
}
