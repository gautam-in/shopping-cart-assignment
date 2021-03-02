import { CartItem } from './../../../cart/cart-items.interface';
import { ProductsDataService } from './../../services/products-data.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductCategoriesService } from 'src/app/home/services/product-categories.service';
import { ProductCategoryDTO } from 'src/app/home/models/product-category-dto';
import { ActivatedRoute, Router } from '@angular/router';

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
  readonly UP = 'up';
  readonly DOWN = 'down';
  menuNavDirection: string = this.DOWN;
  selectedCategoryId: string = '';
  @ViewChild('categoryList', { static: true }) categoryListRef: any;

  constructor(
    private readonly productDataService: ProductsDataService,
    private readonly productCategoriesService: ProductCategoriesService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((routeParamas) => {
      this.selectedCategoryId = routeParamas.get('categoryId') as string;
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

  renderProductByCategory(categoryId: string, e?: any) {
    if (!e && categoryId) {
      this.productsRenderList = [
        ...this.getFilterProductsByCategory(categoryId),
      ];
      return;
    }
    if (e) {
      if (e.srcElement.ariaPressed === 'false') {
        this.productsRenderList = [
          ...this.getFilterProductsByCategory(categoryId),
        ];
        e.srcElement.ariaPressed = 'true';
      } else {
        this.productsRenderList = [...this.allProductsList];
        e.srcElement.ariaPressed = 'false';
      }
    }
    this.router.navigate(['/products', categoryId]);
  }

  getFilterProductsByCategory(categoryId: string) {
    return [...this.allProductsList].filter(
      (product) => product.category === categoryId
    );
  }

  toggleCategoryMenu() {
    let elementHeight = this.categoryListRef.nativeElement.style.height;
    if (elementHeight == '40px') {
      this.categoryListRef.nativeElement.style.height = '180px';
      this.menuNavDirection = this.UP;
    } else {
      this.categoryListRef.nativeElement.style.height = '40px';
      this.menuNavDirection = this.DOWN;
    }
  }
}
