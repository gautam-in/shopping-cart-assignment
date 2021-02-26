import { CartItem } from './../../../cart/cart-items.interface';
import { ProductsListDTO } from './../../models/products-list';
import { ProductsDataService } from './../../services/products-data.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductCategoriesService } from 'src/app/home/services/product-categories.service';
import { ProductCategoryDTO } from 'src/app/home/models/product-category-dto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-landing',
  templateUrl: './product-landing.component.html',
  styleUrls: ['./product-landing.component.scss'],
})
export class ProductLandingComponent implements OnInit {
  productsRenderList: CartItem[] = [];
  allProductsList: CartItem[] = [];
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
      this.allProductsList = [...products];
      this.productsRenderList = [...this.allProductsList];
      if (this.selectedCategoryId) {
        this.renderProductByCategory(this.selectedCategoryId);
      }
    });
  }

  renderProductByCategory(categoryId: string) {
    this.productsRenderList = [...this.getFilterProductsByCategory(categoryId)];
  }

  getFilterProductsByCategory(categoryId: string) {
    return [...this.allProductsList].filter(
      (product) => product.category === categoryId
    );
  }

  toggleCategoryMenu() {
    if (this.categoryListRef.nativeElement.style.height == '40px') {
      this.categoryListRef.nativeElement.style.height = '180px';
      this.menuNavDirection = 'up';
    } else {
      this.categoryListRef.nativeElement.style.height = '40px';
      this.menuNavDirection = 'down';
    }
  }
}
