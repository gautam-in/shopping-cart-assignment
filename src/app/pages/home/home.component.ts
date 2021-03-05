import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';

import { ShoppingService } from '../../services/shopping/shopping.service';
import { CategoryModel } from '../../models/home/category.model';
import {BannersModel} from '../../models/home/banners.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bannerImages: Observable<BannersModel[]> = of([]);
  categories: Observable<CategoryModel[]> = of([]);

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.getAllBanners()
    this.getAllCategories();
  }

  getAllBanners(): void {
    this.bannerImages = this.shoppingService.getAllBanners();
  }

  getAllCategories(): void {
    this.categories = this.shoppingService.getAllCategories();
  }
}
