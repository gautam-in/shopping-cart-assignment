import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categories } from 'src/Shared/models/Categories';
import { Products } from 'src/Shared/models/Products';
import { HomeServiceService } from 'src/Shared/services/home-service.service';
import { ProductsListingServiceService } from 'src/Shared/services/products-listing-service.service';

@Component({
  selector: 'app-products-listing-page',
  templateUrl: './products-listing-page.component.html',
  styleUrls: ['./products-listing-page.component.sass']
})
export class ProductsListingPageComponent implements OnInit {

  constructor(private productSListingService: ProductsListingServiceService, private router: Router, private homeService: HomeServiceService) {
  }
  categoriesData: Categories[] = [];
  productsList: Products[] = [];
  productsListCopy: Products[] = [];
  currWinSize: any = window.innerWidth;
  isDesktop: boolean = this.currWinSize > 1024;
  isMobile: boolean = this.currWinSize < 768;
  currCategory: any = null;
  ngOnInit(): void {
    if (sessionStorage.getItem('isLoggedIn') && sessionStorage.getItem('isLoggedIn') == 'true') {
      this.homeService.categoryId.subscribe((response) => {
        this.currCategory = response;
        console.log(this.currCategory);
        
         this.filterProducts(this.currCategory);
      });
      this.getData();
    }
    else
      this.router.navigate(['login']);
  }
  getData() {
    this.productSListingService.getCategories().subscribe((response) => {
      this.categoriesData = response;
    }, (errorResponse) => {
      console.log(errorResponse);
    });
    this.productSListingService.getProducts().subscribe((response) => {
      this.productsList = response;
      this.productsListCopy=response;
    }, (errorResponse) => {
      console.log(errorResponse);
    });
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isDesktop = event.target.innerWidth > 1024;
    this.isMobile = event.target.innerWidth < 768;
  }
  onSelectionChange(categoryId: string) {
     this.filterProducts(categoryId);
  }

  onCheckboxChange(categoryId: string) {
     this.currCategory = this.currCategory === categoryId ? null : categoryId;
     this.filterProducts(this.currCategory);
  }
  private filterProducts(categoryId: string) {
    console.log(categoryId);
    if (categoryId) {
      setTimeout(()=>{
      this.categoriesData.forEach((category, idx) => {
        if (category.id !== categoryId) {
          category.checked = false;
        } else {
          category.checked = true;
        }
      });
      this.productsList = [
        ...this.productsListCopy.filter((item) => item.category === categoryId),
      ];
    },100) }else {
      this.categoriesData.forEach((category) => (category.checked = false));
      this.productsList = [...this.productsListCopy];
    }
  }

}
