import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bannerList: any = [];
  categories: any = [];
  banners: any = [];

  constructor(private _route: Router, private _appService: AppService) { }

  ngOnInit(): void {
    this.getBanners();
    this.fetchBanners();
    this.fetchCategories();
  }

  getBanners() {
    this._appService.getBanners().subscribe(
      (data) => {
        this.bannerList = data;
      },
      (error) => {
        console.log('error occured', error);
      }
    );
  }

  fetchCategories() {
    this._appService.getCatagories().subscribe((data) => {
      data.forEach((x) => {
        if (x.enabled) {
          this.categories.push(x);
        }
      });
      this.categories = this.categories.sort((a, b) => {
        return a.order - b.order;
      });
    });
  }

  exploreProduct(id: any): void {
    this._route.navigate(['SabkaBaZaar/product/list', id]);
  }

  fetchBanners() {
    this._appService.getBanners().subscribe((data) => {
      this.banners = data;
    });
  }

}
