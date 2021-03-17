import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable, of} from 'rxjs';

import {BannersModel} from '../../models/banners.model';
import {CategoryModel} from '../../models/category.model';
import {ShoppingService} from '../../services/shopping/shopping.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bannerImages: Observable<BannersModel[]> = of([]);
  categories: Observable<CategoryModel[]> = of([]);

  constructor(private shoppingService: ShoppingService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllBanners();
    this.getAllCategories();
  }

  getAllBanners(): void {
    this.bannerImages = this.shoppingService.getAllBanners();
  }

  getAllCategories(): void {
    this.categories = this.shoppingService.getAllCategories();
  }

  redirectToProducts(id: string): void {
    this.router.navigate(['/products'], {queryParams: {category: id}});
  }
}
