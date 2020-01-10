import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { IBanner } from './../models/IBanner';
import { ICategory } from './../models/Icategory';
import { ApiService } from './../shared/services/api.service';
import { Router } from '@angular/router';
import { RouterUrlService } from '../shared/services/routerUrl.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  bannerList: IBanner[];
  buttonConfig: any;
  categoryList: ICategory[];
  slideIndex: number = 1;
  bannerLoading: boolean = false;
  categoryLoading: boolean = false;
  bannerErrorOccured: boolean = false;
  categoryErrorOccured: boolean = false;
  error = null;
  private errorSub: Subscription;
  constructor(private apiService: ApiService, private route: Router, private routerUrlService: RouterUrlService) { }
  ngOnInit() {
    this.errorSub = this.apiService.error.subscribe(errMsg => {
      this.error = errMsg;
    });
    this.buttonConfig = {
      bgColor: "#d10157",
      color: "#fff",
      padding: "10px 15px",
      display: "inline-block",
      position: "static",
      width: "auto",
      border: "none",
      margin: "20px 0 0 0",
      cursor: "pointer"
    }

    this.getBannerData();
    this.getCategories();
    this.routerUrlService.setPageUrl(this.route.url);
  }

  getBannerData() {
    this.bannerLoading = true;
    this.apiService.getBanner("banners").subscribe((bannerList) => {
      this.bannerList = bannerList;
      this.bannerLoading = false;
      this.bannerErrorOccured = false;
    }, error => {
      this.bannerLoading = false;
      this.bannerErrorOccured = true;
      this.apiService.error.next(error.message);
    });
  }

  getCategories() {
    this.categoryLoading = true;
    this.apiService.getCategories("categories").subscribe((categories) => {
      this.categoryList = categories;
      this.categoryLoading = false;
    }, error => {
      this.categoryLoading = true;
      this.categoryErrorOccured = true;
      this.apiService.error.next(error.message);
    });

  }
  onBtnClicked(category: any) {
    this.route.navigate(['/product-list'], { queryParams: { category: category.id } });
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }
}
