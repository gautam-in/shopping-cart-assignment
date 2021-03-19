import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Banner } from '../../models/banner';
import { Category } from '../../models/category';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  banners$: Observable<Banner[]> = new Observable();
  categories$: Observable<Category[]> = new Observable();

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.getBanners();
    this.getCategories();
  }

  isOdd(index: number) {
    return index % 2 !== 0;
  }

  getBanners() {
    this.banners$ = this.homeService.getBanners();
  }

  getCategories() {
    this.categories$ = this.homeService.getCategories();
  }
}
