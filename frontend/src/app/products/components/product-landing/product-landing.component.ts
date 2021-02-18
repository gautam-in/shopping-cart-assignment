import { ProductsList } from './../../models/products-list';
import { ProductsDataService } from './../../services/products-data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductCategoriesService } from 'src/app/home/services/product-categories.service';
import { ProductCategoryDTO } from 'src/app/home/models/product-category-dto';

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
  @ViewChild('categoryList', {static: true}) categoryListRef: any;

  constructor(private readonly productDataService: ProductsDataService,
              private readonly productCategoriesService: ProductCategoriesService) {}

  ngOnInit(): void {
    this.productDataService
      .productsList$
      .subscribe((products) =>
        products.map((product) => this.productsList.push(product))
      );

      this.productCategoriesService.getSortedCategories$().subscribe(categoryList => this.categories = [...categoryList])
  }

  toggleCategoryMenu() {
    if(this.categoryListRef.nativeElement.style.height == '25px') {
      this.categoryListRef.nativeElement.style.height = '180px';
      this.menuNavDirection = 'up';
    } else {
      this.categoryListRef.nativeElement.style.height = '25px';
      this.menuNavDirection = 'down';
    }
  }
}
