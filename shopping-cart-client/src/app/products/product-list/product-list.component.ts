import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';
import { Categories } from '../../models/Categories';
import { FilterData } from '../../models/FilterData';
import { Products } from '../../models/Products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productsList: Products[];
  categoriesData: FilterData[];
  productsListCopy: Products[];
  currCategory: string = null;

  currWinSize: any = window.innerWidth;
  isDesktop: boolean = this.currWinSize > 1024;
  isMobile: boolean = this.currWinSize < 768;

  constructor(private dataService: SharedService, private router: Router) {
    const state = this.router.getCurrentNavigation().extras?.state;
    if (state && state.id) {
      this.currCategory = state.id;
    }
  }

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    const observables: [Observable<Products[]>, Observable<Categories[]>] = [
      this.dataService.getProducts(),
      this.dataService.getCategories(),
    ];

    forkJoin(observables).subscribe(([productsList, categoriesData]) => {
      this.productsList = productsList;
      this.productsListCopy = JSON.parse(JSON.stringify(this.productsList));
      this.categoriesData = this.formatFilterData(
        this.dataService.processData(categoriesData)
      );
      this.filterProducts(this.currCategory);
    });
  }

  private formatFilterData(data: any[]): FilterData[] {
    return data.map((item) => {
      const mappedData: FilterData = {
        id: item.id,
        name: item.name,
        checked: false,
      };
      return mappedData;
    });
  }

  onSelectionChnage(categoryId: string) {
    this.filterProducts(categoryId);
  }

  onCheckboxChange(categoryId: string) {
    this.currCategory = this.currCategory === categoryId ? null : categoryId;
    this.filterProducts(this.currCategory);
  }

  private filterProducts(categoryId: string) {
    if (categoryId) {
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
    } else {
      this.categoriesData.forEach((category) => (category.checked = false));
      this.productsList = [...this.productsListCopy];
    }
  }

  trackById(index: number, product: any): string {
    return product.id;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isDesktop = event.target.innerWidth > 1024;
    this.isMobile = event.target.innerWidth < 768;
  }
}
