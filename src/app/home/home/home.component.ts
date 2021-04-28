import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/shared/services/app.service';
import { IBanner } from 'src/models/banner.model';
import { ICategory } from 'src/models/category.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categories: ICategory[] = [];
  banners: IBanner[] = [];

  constructor(private _route: Router, private _appService: AppService) {
    
  }

  ngOnInit(): void {
    
    this.fetchBanners();
    this.fetchCategories();
  }

  fetchCategories() {
    this._appService.getCatagories().subscribe((Categories) => {
      Categories.forEach((category) => {
        if (category.enabled) {
          this.categories.push(category);
        }
      });
      this.categories = this.categories.sort((a, b) => {
        return a.order - b.order;
      });
    });
  }

  exploreProduct(id: String): void {
    this._route.navigate(['/products/list', id]);
  }

  fetchBanners() {
    this._appService.getBanners().subscribe((data) => {
      this.banners = data;
    });
  }
}
