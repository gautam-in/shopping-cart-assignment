import { ProductsList } from './../../models/products-list';
import { ProductsDataService } from './../../services/products-data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductCategoriesService } from 'src/app/home/services/product-categories.service';
import { ProductCategoryDTO } from 'src/app/home/models/product-category-dto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-landing',
  templateUrl: './product-landing.component.html',
  styleUrls: ['./product-landing.component.scss'],
})
export class ProductLandingComponent implements OnInit {
  productsList: ProductsList[] = [];
  categories: ProductCategoryDTO[] = [];
  showCategoryMenu: boolean = false;
  menuNavDirection: string = 'down';
  selectedCategoryId: string = '';
  @ViewChild('categoryList', { static: true }) categoryListRef: any;

  constructor(
    private readonly productDataService: ProductsDataService,
    private readonly productCategoriesService: ProductCategoriesService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((data) => {
      this.selectedCategoryId = data.get('categoryId') as string;
    });

    this.productCategoriesService
      .getSortedCategories$()
      .subscribe((categoryList) => (this.categories = [...categoryList]));

    this.productDataService.productsList$.subscribe((products) => {
      this.productsList = [...products];
      if(this.selectedCategoryId) {
        this.productsList = [...this.getFilterProductsByCategory(this.selectedCategoryId)];
      }
    });
  }
  

  getFilterProductsByCategory(categoryId: string) {
    console.log('you got clicked');
    return this.productsList.filter((product) => product.category === categoryId);
  }

  toggleCategoryMenu() {
    if (this.categoryListRef.nativeElement.style.height == '25px') {
      this.categoryListRef.nativeElement.style.height = '180px';
      this.menuNavDirection = 'up';
    } else {
      this.categoryListRef.nativeElement.style.height = '25px';
      this.menuNavDirection = 'down';
    }
  }
}
