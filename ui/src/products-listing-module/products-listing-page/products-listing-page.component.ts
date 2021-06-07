import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/Shared/models/Category';
import { Product } from 'src/Shared/models/Product';
import { HomeService } from 'src/Shared/services/home.service';
import { LoginService } from 'src/Shared/services/login.service';
import { ProductsListingService } from 'src/Shared/services/products-listing.service';

@Component({
  selector: 'app-products-listing-page',
  templateUrl: './products-listing-page.component.html',
  styleUrls: ['./products-listing-page.component.sass']
})
export class ProductsListingPageComponent implements OnInit {

  constructor(private loginService: LoginService, private productSListingService: ProductsListingService,
    private router: Router, private homeService: HomeService) {
  }
  categoriesData: Category[] = [];
  productsList: Product[] = [];
  currWinSize: any = window.innerWidth;
  currCategory: any = null;
  isLoggedIn: boolean = false;
  ngOnInit(): void {
    this.loginService.checkLoggedIn().subscribe((response) => {
      this.isLoggedIn = response;
      if (this.isLoggedIn) {
        this.homeService.categoryId.subscribe((response) => {
          this.currCategory = response;
          this.getData();
        });
      }
      else {
        this.router.navigate(['login']);
      }
    });
  }
  getData() {
    this.productSListingService.getCategories().subscribe((response) => {
      this.categoriesData = response;
    });
    this.productSListingService.getProducts().subscribe((response) => {
      this.productsList = response;
    });
  }
  onSelectionChange(categoryId: any) {
    this.currCategory = this.currCategory === categoryId ? null : categoryId;
  }
  onCheckboxChange(categoryId: string) {
    this.currCategory = this.currCategory === categoryId ? null : categoryId;
  }
}
